import Block from '../../utils/Block'
import template from './chat.pug'
import Chat from '../../components/Chat/Chat'
import ChatCreate from '../../components/Chat/ChatCreate'
import Input from '../../components/Input'
import Message from '../../components/Chat/Message'
import Link from '../../components/Link'
import Button from '../../components/Button/Button'
import { Router } from '../../utils/Router';
import {Path} from "../../constants/router";
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
      createChat:  new ChatCreate(),
      chatList: props.chats.map(data => new Chat(data)),
      messageList: [
        new Message({
          className: 'chat-message--sent',
          massageText: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.',
        }),
        new Message({
          className: 'chat-message--incoming',
          massageText: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.',
        }),
        new Message({
          className: 'chat-message--incoming',
          massageText: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.',
        }),
        new Message({
          className: 'chat-message--sent',
          massageText: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.',
        }),
      ],

      inputMessage: new Input({
        inputName: 'message',
        inputValue: '',
        id: 'message',
        errorText: '',
        type: 'text',
        placeholder: 'Сообщение',
      }),

      events: {
        submit: (e: Event) => this.handleSubmit(e),
       
      },
      
    })
    this.route = new Router()
  }

  componentDidMount() {
    // document.title = getDocumentTitle('Чаты');
  }
  
  componentDidUpdate(oldProps: any, newProps: any ) {
    alert(2)
    this.children.chatList = newProps.chats.map(data => new Chat(data));
    return super.componentDidUpdate(oldProps, newProps);
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

    console.log('messageForm', data)
  }

 

  render() {
    return this.compile(template, { ...this.props })
  }
}
export default ChatPage;
