import Block from '../../../utils/Block'
import template from './template.pug'
import store from '../../../../src/utils/Store'
import Link from '../../../components/Link'
import ChatController from '../../../controllers/ChatController'


class ChatHeader extends Block {
  constructor(props) {
    super({
      ...props,
      addUser: new Link({
        label: 'Добавить пользователя',
        events: {
          click: () => this.handleAddUserClick()
        }
      }),
      deleteUser: new Link({
        label: 'Удалить пользователя',
        events: {
          click: () => this.handleDeleteUserClick()
        }
      }),
    })
  }

  async handleAddUserClick() {
    const userId = 390954
    const data = {
      users: [userId],
      chatId: this.props.chatid
    }

    console.log('datadata',this.props)
    try {
      await ChatController.addUsersChat(data)
      alert(`Пользователь ${userId} добавлен`)
    } catch (e) {
      console.log('error', e)
    }
  }

  async handleDeleteUserClick() {
    const userId = 390954
    const data = {
      users: [userId],
      chatId: this.props.chatid
    }

    try {
      await ChatController.deleteUsersChat(data)
      alert(`Пользователь ${userId} удален`)
    } catch (e) {
      console.log('error', e)
    }
  }

  render() {
    return this.compile(template, { ...this.props })
  }

}
export default ChatHeader;
