import Block from '../../utils/Block'
import template from './template.pug'
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
    return this.compile(template, { ...this.props })
  }
}
export default Modal
