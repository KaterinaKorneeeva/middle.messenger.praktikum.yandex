import Block from '../../utils/Block'
import template from './chat.pug'
import Chat from '../../components/Chat/Chat'
import ChatCreate from '../../components/Chat/ChatCreate'
import ChatHeader from '../../components/Chat/ChatHeader'
import Input from '../../components/Input'
import MessageForm from '../../components/Chat/MessageForm'
import Link from '../../components/Link'
import { Router } from '../../utils/Router'
import { Path } from '../../constants/router'
import '../../sass/main.scss'

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
      inputMessage: new MessageForm({
        inputName: 'message',
        inputValue: '',
        id: 'message',
        errorText: '',
        type: 'text',
        placeholder: 'Сообщение',
      })
    })
    this.route = new Router()
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    console.log('chatschatschats', newProps.chats) 

    this.children.chatList = newProps.chats.map(data => new Chat(data))
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
