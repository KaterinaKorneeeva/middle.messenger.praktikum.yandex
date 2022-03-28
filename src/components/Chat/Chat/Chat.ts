import Block from '../../../utils/Block'
import template from './template.pug'
import store from '../../../../src/utils/Store'
import ChatController from '../../../controllers/ChatController'
import WebSocketMessage from '../../../api/webSocket';
interface ChatProps {
  id: number
  messageText: string
  title: string
  chatDate: string
  unread_count: string
}

export default class Chat extends Block {

  activeSocket: WebSocketMessage;

  constructor(props: ChatProps) {
    super({
      ...props,
      events: {
        click: () => this.handleActiveChatClick()
      },
    })

  }


  handleActiveChatClick() {
    const token = this.connectToChat(this.props.id)

    const chatActiveData = {
      title: this.props.title,
      chatid: this.props.id,
      user: 390954,
      token: token,

    }
    store.set('activeChat', chatActiveData)
    
 

    // user = 
    const userId = 390954
    const chat = this.props.id
    
    if (this.props.id && userId) {
      this.openSocket(userId, chat, token);
    }

  }

  openSocket(user, chat, token): void {

console.log('user', user)
console.log('chat', chat)
console.log('token', token)
    this.activeSocket = new WebSocketMessage(
      `wss://ya-praktikum.tech/ws/chats/${user}/${chat}/${token}`
    );
    console.log('token',  this.activeSocket)
  }


  async connectToChat(chatId: number) {
    

    const token = await  ChatController.getToken(chatId)
    console.log('tokentoken',token)

    return token

  }

// connectToServerSocket(userId: string, chatId: number, token) {

//   // if (userId && chatId && token) {
//   //     new WebSocketMessage(userId, chatId, token, this.fetchChatMessageList.bind(this))
//   // }
// }


  render() {
    return this.compile(template, { ...this.props })
  }
}
