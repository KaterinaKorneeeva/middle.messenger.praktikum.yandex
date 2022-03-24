import Block from '../../../utils/Block'
import template from './template.pug'

interface ChatProps {
  messageText: string
  title: string
  chatDate: string
  unread_count: string
}

export default class Chat extends Block {
  constructor(props: ChatProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
