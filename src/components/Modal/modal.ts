import { compile } from 'pug'
import Block from '../../utils/Block'
import {modalTemplate} from './modal.tmpl'
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
    return this.compile(compile(modalTemplate), { ...this.props })
  }
}
export default Modal
