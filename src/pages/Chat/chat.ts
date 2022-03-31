import Block from '../../utils/Block'
import template from './chat.pug'
import Chat from '../../components/Chat/Chat'
import ChatCreate from '../../components/Chat/ChatCreate'
import ChatHeader from '../../components/Chat/ChatHeader'
import Input from '../../components/Input'
import Message from '../../components/Chat/Message'
import MessageForm from '../../components/Chat/MessageForm'

import Link from '../../components/Link'
import { Router } from '../../utils/Router'
import { Path } from '../../constants/router'
import '../../sass/main.scss'
import store from '../../../src/utils/Store'

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
      createChat:  new ChatCreate(),
      chatList: props.chats.map(data => new Chat(data)),
      chatHeader: new ChatHeader(),
      messageList: [],
      inputMessage: new Input({
        inputName: 'message',
        inputValue: '',
        id: 'message',
        errorText: '',
        type: 'text',
        placeholder: 'Сообщение',
      }),
      inputMessage: new MessageForm({
        inputName: 'message',
        inputValue: '',
        id: 'message',
        errorText: '',
        type: 'text',
        placeholder: 'Сообщение',
      }),

      // events: {
      //   submit: (e: Event) => this.handleSubmit(e),
      // },
      
    })
    this.route = new Router()
  }


  componentDidMount() {
  }



  componentDidUpdate(oldProps: any, newProps: any ) {
    this.children.chatList = newProps.chats.map(data => new Chat(data))
    return super.componentDidUpdate(oldProps, newProps)
  }

  onClick() {
    this.route.go(Path.Profile)
  }

  handleSubmit(e: Event) {
    e.preventDefault()
    const formData = new FormData((e.target as HTMLFormElement))
    const data = {
      message: formData.get('message'),
    }

    const dataTest = store.getState().activeChat
    
    const userId = dataTest.userId

    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${dataTest.chatid}/${dataTest.token}` )

    socket.onopen = function(e) {
      console.log(("[open] Соединение установлено"))
      console.log(("Отправляем данные на сервер"))
      // socket.send(data.message)
      socket.send(JSON.stringify({
        content: data.message,
        type: 'message',
        }))
        
    }

    this.setProps({
      ...this.props,
      messageList: [  new Message({
        className: 'chat-message--sent',
        massageText: data.message,
      })]
    })

  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
export default ChatPage
