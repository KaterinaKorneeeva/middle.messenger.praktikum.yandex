import Block from '../../utils/Block'
import template from './template.pug'
interface LinkProps {
  label: string
  events?: {
    onClick?: () => void
  }
}
class Link extends Block {
  constructor(props: LinkProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
export default Link
