import Block from '../../../utils/Block';
import template from './template.pug'
import Input from '../../../components/Input'
import Message from '../../../components/Chat/Message'
import store from '../../../../src/utils/Store'

export default class MessageForm extends Block {
  constructor(props) {
    super({
      ...props,
      inputMessage: new Input({
        inputName: 'message',
        inputValue: '',
        id: 'message',
        errorText: '',
        type: 'text',
        placeholder: 'Сообщение',
      }),
      messageList: new Message(),
      events: {
        submit: (e: Event) => this.handleSubmit(e),
      },
    })
  }

  handleSubmit(e: Event) {
    e.preventDefault()
    const formData = new FormData((e.target as HTMLFormElement))
    const data = {
      message: formData.get('message'),
    }
    const dataTest = store.getState().activeChat
    const userId = dataTest?.userId

    if (userId && dataTest.chatid) {
      const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${dataTest.chatid}/${dataTest.token}`);

      socket.onopen = function (e) {
        console.log('Соединение установлено')
        socket.send(JSON.stringify({
          content: data.message,
          type: 'message',
        }))

        socket.send(JSON.stringify({
          content: data.message,
          type: 'message',
        }))
      }

      document.getElementById('message').value= ''

     

      const messageNewList = 

     [{
      className: "chat-message--sent",
      massageText: 'первое сообщение'}]

      messageNewList.push(
        {
          className: "chat-message--sent",
          massageText:  data.message}
      );
      
      this.setProps({
        ...this.props,
        
        messageList:messageNewList.map(data =>new Message(data))
      })
    } else {
      console.log('пользователь не добавлен или не выбран чат')
    }
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
