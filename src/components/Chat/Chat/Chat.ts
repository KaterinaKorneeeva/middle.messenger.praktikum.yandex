import { compile } from 'pug'
import Block from '../../../utils/Block'
import {chatTemplate} from './chat.tmpl'
import store from '../../../../src/utils/Store'
import MessagesController from '../../../controllers/MessagesController'
interface ChatProps {
  id: number
  messageText: string
  title: string
  chatDate: string
  unread_count: string
  activeChatId: boolean
  last_message: Record<string, unknown>;
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
    setTimeout(() => MessagesController.openWSS(), 100)
  }

  render() {
    return this.compile(compile(chatTemplate), { ...this.props })
  }
}
