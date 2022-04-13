import { compile } from 'pug'
import Block from '../../../utils/Block'
import { buttonTemplate } from './button.tmpl'
interface ButtonProps {
  label: string
  className: string
  events?: {
    click?: () => void
  }
}
class ButtonSettings extends Block {
  constructor(props: ButtonProps) {
    super(props)
  }

  render() {
    return this.compile(compile(buttonTemplate), { ...this.props })
  }
}
export default ButtonSettings
