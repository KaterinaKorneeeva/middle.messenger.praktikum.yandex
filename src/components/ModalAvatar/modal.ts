import { compile } from 'pug'
import Block from '../../utils/Block'
import {modalAvatarTemplate} from './modalAvatar.tmpl'
interface ButtonProps {
  label: string
  events?: {
    submit?: () => void
  }
}

class Modal extends Block {
  constructor(props: ButtonProps) {
    super(props)
  }

  render() {
    return this.compile(compile(modalAvatarTemplate), { ...this.props })
  }
}
export default Modal
