import Block from '../../../utils/Block'
import template from './template.pug'
import store from '../../../../src/utils/Store'
import ChatController from '../../../controllers/ChatController'

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

  async handleActiveChatClick() {
    const token = await ChatController.getToken(this.props.id)
    const chatActiveData = {
      title: this.props.title,
      chatid: this.props.id,
      userId: store.getState().currentUser?.id,
      token,
    }
    store.set('activeChat', chatActiveData)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
