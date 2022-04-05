import Block from '../../../utils/Block'
import template from './template.pug'
import store from '../../../../src/utils/Store'
import MessagesController from '../../../controllers/MessagesController'
interface ChatProps {
  id: number
  messageText: string
  title: string
  chatDate: string
  unread_count: string
  activeChatId: boolean
}

export default class Chat extends Block {

  constructor(props: ChatProps) {
    super({
      ...props,
      lastMessage: props.last_message?.content,
      events: {
        click: () => this.handleActiveChatClick()
      },
    })
  }

  async handleActiveChatClick() {
    const chatActiveData = {
      title: this.props.title,
      chatid: this.props.id,
      userId: store.getState().currentUser?.id,
    }
    store.set('activeChat', chatActiveData)
    setTimeout(() => MessagesController.openWSS(), 1000)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
