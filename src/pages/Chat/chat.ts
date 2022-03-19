import Block from '../../utils/Block'
import template from './chat.pug'
import Chat from '../../components/Chat/Chat'
import Input from '../../components/Input'
import Message from '../../components/Chat/Message'
import Link from '../../components/Link'
import { Router } from '../../utils/Router';
import {Path} from "../../constants/router";
import '../../sass/main.scss'

export class ChatPage extends Block {
  constructor() {
    super({
      sender: 'Андрей',
      link: new Link({
        label: 'профиль',
        events: {
          click: () => this.onClick()
        }
      }),
      chatList: [
        new Chat({
          sender: 'Андрей',
          messageText: 'Друзья, у меня для вас особенный выпуск новостей!',
          date: '10:40',
          count: '1',
        }),
        new Chat({
          sender: 'Семен',
          messageText: 'Привет! посмотри ссылку',
          date: '9:40',
          count: '3',
        })],

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
