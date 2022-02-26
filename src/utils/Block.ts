import EventBus from './EventBus';
// import {Nullable, Values} from './types';
import {nanoid} from 'nanoid';



class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  public id = nanoid(6);

  private _element: HTMLElement | null = null;
  private _meta: { props: any};

  protected props: any;
  protected children: Record<string, Block>;
  private eventBus: () => EventBus


constructor (propsAndChildren: any = {}) {
    const eventBus = new EventBus();
    const { props, children } = this.getChildren(propsAndChildren)

    this.children = children;
    this._meta = {
      props,
    };

    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT)
  }

    getChildren(propsAndChildren: any) {
      const children: any = {}
      const props: any = {}

      Object.entries(propsAndChildren).map(([key, value]) => {
          if (value instanceof Block) {
            children[key] = value;
          } else if (Array.isArray(value) && value.every(v => (v instanceof Block))) {
              children[key] = value;
          } else {
              props[key] = value
          }
        });
        return { props, children }
    }


  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));

    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

//   _createResources() {
//     this._element = this._createDocumentElement('div');
//   }

//   protected getStateFromProps(props: any): void {
//     this.state = {};
//   }

  init() {
    // this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {
  }

  dispatchComponentDidMount() {
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any) {
    if (this.componentDidUpdate(oldProps, newProps)) {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER); 
    }
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };


//   setState = (nextState: any) => {
//     if (!nextState) {
//       return;
//     }

//     Object.assign(this.state, nextState);
//   };

  get element(): HTMLElement | null {
    return this._element;
  }

  _render() {
    const fragment = this.render();
    const newElement = fragment.firstElementChild as HTMLElement;

    if  (this._element) {
        this._removeEvents();
        this._element.replaceWith(newElement);
    }
    

    this._element = newElement;
    this._addEvents();
  }

  protected render(): DocumentFragment {
    return  new DocumentFragment();
  };



  getContent(): HTMLElement | null {
    console.log('this.element',this.element)
      return this.element;
    // // Хак, чтобы вызвать CDM только после добавления в DOM
    // if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    //   setTimeout(() => {
    //     if (this.element?.parentNode?.nodeType !==  Node.DOCUMENT_FRAGMENT_NODE ) {
    //       this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    //     }
    //   }, 100)
    // }

    // return this.element!;
  }

  _makePropsProxy(props: any): any {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown) {
        target[prop] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events || !this._element) {
      return;
    }


    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener);
    });
  }

  _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener);
    });
  }

  _createDocumentElement(tagName: string) : HTMLElement {
    return document.createElement(tagName);
  }

  
  compile(template: (context: any) => string , context: any) {

    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

    /**
     * Заменяем заглушки на компоненты
     */
    Object.entries(this.children).forEach(([key, child]) => {
        if (Array.isArray(child)) {
            context[key] = child.map((ch =>  `<div [data-id="id- ${ch.id}"]></div>`));
            return;
        }
        
        context[key]= `<div [data-id="id- ${child.id}"]></div>`
    });
    
    const htmlString = template(context);

    
    
    fragment.innerHTML = htmlString;
 
    Object.entries(this.children).forEach(([id, component]) => {
      /**
       * Ищем заглушку по id
       */
      const stub = fragment.content.querySelector(`[data-id="${id}"]`);

      console.log('stubstubstub',component)

      if (!stub) {
        return;
      }

      /**
       * Заменяем заглушку на component._element
       */
      stub.replaceWith(component.getContent());


    });

  //   Object.entries(this.children).forEach(([key, child]) => {

  //     alert(1);
  //     console.log('fragment.content',fragment.content.querySelector(`data-id="id- ${child.id}"]`))
        
  //       const stub = fragment.content.querySelector(`data-id="id- ${child.id}"]`);
  //       if (!stub) {
  //           return;
  //       }

  //       stub.replaceWith(child.getContent()!)
  //  });

  console.log(' fragment.content', fragment.content)
   return fragment.content;

  }
}

export default Block;