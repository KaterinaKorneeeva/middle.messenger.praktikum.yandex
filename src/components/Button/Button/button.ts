import { compile } from 'pug'
import Block from '../../../utils/Block'
import { buttonTemplate } from './button.tmpl'
interface ButtonProps {
  label?: string
  type?: string
  className?: string 
  events?: {
    onClick?: () => void
  }
}
class Button extends Block {
  constructor(props: ButtonProps) {
    super(props)
  }

  render() {
    return this.compile(compile(buttonTemplate), { ...this.props })
  }
}
export default Button
