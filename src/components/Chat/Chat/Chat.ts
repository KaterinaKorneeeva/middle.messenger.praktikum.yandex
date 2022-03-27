import Block from '../../../utils/Block'
import template from './template.pug'
import store from '../../../../src/utils/Store'
interface ChatProps {
  id: number
  messageText: string
  title: string
  chatDate: string
  unread_count: string
}

export default class Chat extends Block {

  constructor(props: ChatProps) {
    super({
      ...props,
      events: {
        click: () => this.handleActiveChatClick()
      },
    })

  }


  handleActiveChatClick() {
    const chatActiveData = {
      title: this.props.title,
      id: this.props.id,
    }
    store.set('activeChat', chatActiveData)
  }



  render() {
    return this.compile(template, { ...this.props })
  }
}
