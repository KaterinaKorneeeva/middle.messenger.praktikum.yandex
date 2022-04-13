import { compile } from 'pug'
import Block from '../../utils/Block'
import {modalAvatarTemplate} from './modalAvatar.tmpl'

class Modal extends Block {
  constructor(props: any) {
    super(props)
  }

  render() {
    return this.compile(compile(modalAvatarTemplate), { ...this.props })
  }
}
export default Modal
