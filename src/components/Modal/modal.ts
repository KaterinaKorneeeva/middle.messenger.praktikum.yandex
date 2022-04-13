import { compile } from 'pug'
import Block from '../../utils/Block'
import {modalTemplate} from './modal.tmpl'
class Modal extends Block {
  constructor(props: any) {
    super(props)
  }

  render() {
    return this.compile(compile(modalTemplate), { ...this.props })
  }
}
export default Modal
