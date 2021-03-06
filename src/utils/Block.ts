import EventBus from './EventBus'
import { nanoid } from 'nanoid'
import { isEqual } from './helpers';
class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const

  public id = nanoid(6)

  private _element: HTMLElement | null = null
  private _meta: { props: any }

  protected props: any
  private _timeoutId: undefined | ReturnType<typeof setTimeout>

  protected children: Record<string, Block>
  private eventBus: () => EventBus


  constructor(propsAndChildren: any = {}) {
    const eventBus = new EventBus()
    const { props, children } = this.getChildren(propsAndChildren)

    this.children = children
    this._meta = {
      props,
    }

    this.props = this._makePropsProxy(props)
    this.eventBus = () => eventBus
    this._registerEvents(eventBus)
    eventBus.emit(Block.EVENTS.INIT)
  }

  getChildren(propsAndChildren: any) {
    const children: any = {}
    const props: any = {}

    Object.entries(propsAndChildren).map(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else if (Array.isArray(value) && value.every(v => (v instanceof Block))) {
        children[key] = value
      } else {
        props[key] = value
      }
    })
    return { props, children }
  }


  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))

    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props)
  }

  private _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach(child => {
      if (Array.isArray(child)) {
        child.forEach(elem => {
          elem.dispatchComponentDidMount();
        })
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (oldProps === newProps) {
      return false;
    }
    return true;
  }

  componentDidMount(oldProps, newProps) {
    return !isEqual(oldProps, newProps);
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return
    }
    const { props, children } = this.getChildren(nextProps)
    Object.assign(this.children, children)
    Object.assign(this.props, props)
  }


  get element(): HTMLElement | null {
    return this._element
  }

  private _render() {
    const fragment = this.render()
    const newElement = fragment.firstElementChild as HTMLElement
    if (this._element) {
      this._removeEvents()
      this._element.replaceWith(newElement)
    }

    this._element = newElement
    this._addEvents()
  }


  protected render(): DocumentFragment {
    return new DocumentFragment()
  }

  getContent(): HTMLElement | null {
    return this.element
  }

  private _makePropsProxy(props: any): any {
    const self = this
    return new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(target: Record<string, unknown>, prop: string, value: unknown) {
        target[prop] = value
        const oldProps = { ...target }
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target)
        return true
      },
      deleteProperty() {
        throw new Error('?????? ??????????????')
      },
    })
  }

  private _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events

    if (!events || !this._element) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener)
    })
  }

  private _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events

    if (!events) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener)
    })
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName)
  }

  remove() {
    this.getContent().remove()
  }

  compile(template: (context: any) => string, context: any) {
    
    const fragment = this._createDocumentElement('template') as HTMLTemplateElement

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        child.forEach((elem) => {
          if (context[key]) {
            context[key] = context[key] + `<div data-id="id-${elem.id}"></div>`
          } else {
            context[key] = `<div data-id="id-${elem.id}"></div>`
          }
        })
      } else {
        context[key] = `<div data-id="id-${child.id}"></div>`
      }
    })

    fragment.innerHTML = template(context)



    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        child.forEach((elem) => {
          const stub = fragment.content.querySelector(`[data-id="id-${elem.id}"]`)
          if (!stub) {
            return
          }
          stub.replaceWith(elem.getContent()!)
        })
      } else {
        const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`)
        if (!stub) {
          return
        }
        stub.replaceWith(child.getContent()!)
      }
    })
    return fragment.content
  }
}

export default Block
