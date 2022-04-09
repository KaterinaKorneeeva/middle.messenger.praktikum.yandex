import Block from '../../../utils/Block'
import template from './template.d'
import Input from '../../../components/Input'
import Button from '../../../components/Button/Button'
import ChatController from '../../../controllers/ChatController'
import { ChatData } from '../../../api/ChatApi'

class ChatCreate extends Block {
  constructor() {
    super({
      chatCreateInput:
        new Input({
          inputName: 'title',
          id: 'title',
          type: 'text',
          placeholder: 'название чата',
          required: true,
        }),
      button: new Button({
        label: '+',
        className: 'button--round'
      }),
      events: {
        submit: (e: Event) => this.handleSubmit(e),
      },
    })

  }

  async handleSubmit(e: Event) {
    e.preventDefault()
    const formData = new FormData((e.target as HTMLFormElement))
    const data = {
      title: formData.get('title'),
    }
    try {
      await ChatController.createChat(data as ChatData)

    } catch (e) {
      console.log('error', e)
    }
  }

  render() {
    return this.compile(template, { ...this.props })
  }

}
export default ChatCreate;
