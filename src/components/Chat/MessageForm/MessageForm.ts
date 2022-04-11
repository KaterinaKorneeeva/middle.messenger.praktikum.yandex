import { compile } from 'pug'
import Block from '../../../utils/Block';
import {messageFormTemplate} from './messageForm.tmpl'
import Input from '../../../components/Input'
import store from '../../../../src/utils/Store'
import MessagesController from '../../../controllers/MessagesController'

export default class MessageForm extends Block {
  constructor(props:any) {
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
    const dataTest = store.getState().activeChat
    const userId = dataTest?.userId

    document.getElementById('message').value= ''
    
    if (userId && dataTest.chatid) {
      MessagesController.sendMessage({ type: 'message', content: data.message });
    }
    else {
      console.log('пользователь не добавлен или не выбран чат')
    }
  }

  render() {
    return this.compile(compile(messageFormTemplate), { ...this.props })
  }
}
