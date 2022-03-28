import Block from '../../utils/Block'
import template from './chat.pug'
import Chat from '../../components/Chat/Chat'
import ChatCreate from '../../components/Chat/ChatCreate'
import chatHeader from '../../components/Chat/chatHeader'
import Input from '../../components/Input'
import Message from '../../components/Chat/Message'
import Link from '../../components/Link'
import Button from '../../components/Button/Button'
import { Router } from '../../utils/Router';
import {Path} from "../../constants/router";
import '../../sass/main.scss'
import store from '../../../src/utils/Store'
// import WebSocketMessage from '../../../src/api/webSocket';
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
      chatHeader: new chatHeader(),
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


  componentDidUpdate(oldProps: any, newProps: any ) {
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

    console.log('messageForm', data.message)

    // const dataTest = store.getState().activeChat
    
    // console.log('dataTestdataTest', dataTest.user)


    // const socket = new WebSocket(
    //   `wss://ya-praktikum.tech/ws/chats/${dataTest.user}/${dataTest.chatid}/${dataTest.token}`
    // );

    // socket.onopen = function(e) {
    //   // alert("[open] Соединение установлено");
    //   // alert("Отправляем данные на сервер");
    //   // socket.send(data.message);

    //   socket.send(JSON.stringify({
    //     content: data.message,
    //     type: 'message',
    //     }));
    // };

  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
export default ChatPage;
