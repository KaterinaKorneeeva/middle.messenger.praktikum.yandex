import Block from '../../../utils/Block'
import template from './template.pug'
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
    return this.compile(template, { ...this.props })
  }
}
export default Button
