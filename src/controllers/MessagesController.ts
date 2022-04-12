import MessagesAPI, { MessageFormData, MessagesAPIData} from '../api/MessagesAPI'
import store from '../utils/Store'
import ChatController from './ChatController'
import { adaptMessageData } from '../utils/profile'

class MessagesController {
  static status: string
  private wss: MessagesAPI
  static timeout: NodeJS.Timer
  private _events(): MessagesAPIData['callback'] {
    return {
      onOpen: this._onOpenHandler.bind(this),
      onClose: this._onCloseHandler.bind(this),
      onMessage: this._onMessageHandler.bind(this),
    }
  }
  

  protected formingResponse(res: MessageFormData) {
    const { data: response, type } = res
    let data

    if (typeof response === 'string') {
      try {
        data = JSON.parse(response)
      } catch (err) {
        data = JSON.parse(JSON.stringify(response))
      }
    }

    if (type !== 'message') {
      const userId = store.getState().currentUser?.id
      data = data.map((message:any) => adaptMessageData(message, userId))
    }
    return {data, type }
  }

  public async openWSS() {
    if (MessagesController.status === 'online') {
      this.closeWSS()
    }


    const chatId =  store.getState().activeChat?.chatid
    const userId =  store.getState().activeChat?.userId
    
    if (!chatId || !userId) return
    const token = await ChatController.getToken(chatId)

    if (!token) return
  
    const callback = this._events()
    this.wss = new MessagesAPI({ userId, chatId, token, callback })
  }

  public closeWSS() {
    this.wss.close()
  }

  public sendMessage(data: MessageFormData = {}) {
    const { type = 'get old', content = '0' } = data
    this.wss.send({ type, content })
  }

  private _onCloseHandler() {
    store.set('activeChatMessages', [])
    MessagesController.status = 'offline'
  }

  private _onOpenHandler() {
    MessagesController.status = 'online'
    this.sendMessage()
  }


  private _onMessageHandler(e: Event) {
    const res = this.formingResponse(e);
    (!res.data.reason && (Array.isArray(res.data) || res.data?.type === 'message')) 
    {
      const messages = store.getState().activeChatMessages || []
      const newMessages = Array.isArray(res.data) ? res.data : [res.data]
      store.set('activeChatMessages', (messages as any[]).concat(newMessages))
    }
  }
}

export default new MessagesController()
