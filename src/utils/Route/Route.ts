import { isEqual, render } from '../helpers';
interface Props {
  rootQuery: string,
  classes: string,
  id?: string,
  events?: {
    string: () => void
  },
  state?: unknown
}
export default class Route {

  private _pathname: string;
  private _blockClass: unknown | any;
  private _block: string | null;
  private _props: Props;
  private _root: HTMLElement | null;

  constructor(pathname: string, view: unknown, props: Props) {
    this._pathname = pathname
    this._blockClass = view;
    this._block = null
    this._props = props
    this._root = document.querySelector(this._props.rootQuery);
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block = null;

      if (!this._root) return;
      this._root.innerHTML = '';
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname)
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass()
      render(this._props.rootQuery, this._block)
      return
    }
  }
}
