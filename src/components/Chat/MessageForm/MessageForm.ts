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
    alert(222)

    const dataTest = store.getState().activeChat
    
    const userId = dataTest.userId

    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${dataTest.chatid}/${dataTest.token}` );

    socket.onopen = function(e) {
      console.log(("[open] Соединение установлено"))
      console.log(("Отправляем данные на сервер"))
      // socket.send(data.message);
      socket.send(JSON.stringify({
        content: data.message,
        type: 'message',
        }));
        
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
