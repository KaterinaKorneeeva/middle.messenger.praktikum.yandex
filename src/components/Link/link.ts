import { compile } from 'pug'
import Block from '../../utils/Block'
import {linkTemplate} from './link.tmpl'
interface LinkProps {
  label: string
  events?: {
    click?: () => void
  }
}
class Link extends Block {
  constructor(props: LinkProps) {
    super(props)
  }

  render() {
    return this.compile(compile(linkTemplate), { ...this.props })
  }
}
export default Link
