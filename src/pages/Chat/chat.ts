import Block from '../../utils/Block'
import template from './chat.pug'
import Chat from '../../components/Chat/Chat'
import ChatCreate from '../../components/Chat/ChatCreate'
import ChatHeader from '../../components/Chat/ChatHeader'
import MessageForm from '../../components/Chat/MessageForm'
import MessageList from '../../components/Chat/MessageList'
import Link from '../../components/Link'
import { Router } from '../../utils/Router'
import { Path } from '../../constants/router'
import '../../sass/main.scss'
import store from '../../utils/Store'
import { adaptChatData } from '../../utils/profile'
class ChatPage extends Block {

  constructor(props) {

    super({
      ...props,
      link: new Link({
        label: 'профиль',
        events: {
          click: () => this.onClick()
        }
      }),
      createChat: new ChatCreate(),
      chatList: props.chats.map(data => new Chat(data)),
      chatHeader: new ChatHeader(),
      messageList: new MessageList(),
      inputMessage: new MessageForm({
        inputName: 'message',
        inputValue: '',
        id: 'message',
        errorText: '',
        type: 'text',
        placeholder: 'Сообщение',
      }),

    })
    this.route = new Router()
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    const activeChatId = store.getState().activeChat.chatid
    const adaptOffers = newProps.chats.map((chat) => adaptChatData(chat, activeChatId))
    this.children.chatList = adaptOffers.map(data => new Chat(data))
    return super.componentDidUpdate(oldProps, newProps)
  }

  onClick() {
    this.route.go(Path.Profile)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
export default ChatPage
