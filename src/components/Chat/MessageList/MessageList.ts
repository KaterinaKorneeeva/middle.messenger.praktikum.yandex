import Block from '../../../utils/Block'
import template from './template.d'
import store from '../../../utils/Store'
import Message from '../../../components/Chat/Message'
import { adaptMessageData } from '../../../utils/profile'

class ChatHeader extends Block {
  constructor(props) {
    super({
      ...props,
      messageList: []
    })
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    const messagesList = store.getState().activeChatMessages
    const userId = store.getState().currentUser?.id
    const adaptMessage = messagesList.map((message) => adaptMessageData(message, userId))
    this.children.messageList = adaptMessage.map(data => new Message(data))
    return super.componentDidUpdate(oldProps, newProps)
  }

  render() {
    return this.compile(template, { ...this.props })
  }

}
export default ChatHeader
