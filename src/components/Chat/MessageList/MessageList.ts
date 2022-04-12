import { compile } from 'pug'
import Block from '../../../utils/Block'
import {messageListTemplate} from './messageList.tmpl'
import store from '../../../utils/Store'
import Message from '../../../components/Chat/Message'
import { adaptMessageData } from '../../../utils/profile'

class ChatHeader extends Block {
  constructor(props:any) {
    super({
      ...props,
      messageList: []
    })
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    const messagesList = store.getState().activeChatMessages
    const userId = store.getState().currentUser?.id
    const adaptMessage = messagesList?.map((message:any) => adaptMessageData(message, userId))
    // @ts-ignore
    this.children.messageList = adaptMessage?.map((data:any) => new Message(data))
    return super.componentDidUpdate(oldProps, newProps)
  }

  render() {
    return this.compile(compile(messageListTemplate), { ...this.props })
  }

}
export default ChatHeader
