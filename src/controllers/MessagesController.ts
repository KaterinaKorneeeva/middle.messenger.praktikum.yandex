import MessagesAPI, { MessageFormData, MessagesAPIData} from '../api/MessagesAPI'
import store from '../utils/store'
import ChatController from './ChatController';
import { adaptMessageData } from '../utils/profile'

class MessagesController {
  static status: string;
  private wss: MessagesAPI;
  private _events(): MessagesAPIData['callback'] {
    return {
      onOpen: this._onOpenHandler.bind(this),
      onClose: this._onCloseHandler.bind(this),
      onMessage: this._onMessageHandler.bind(this),
    };
  }
  

  protected formingResponse(res: MessageFormData) {
    const { data: response, type } = res;
    let data;

    if (typeof response === 'string') {
      try {
        data = JSON.parse(response);
      } catch (err) {
        data = JSON.parse(JSON.stringify(response));
      }
    }

    if (type !== 'message') {
      data = data.map((message) => adaptMessageData(message))
    }
    return {data, type };
  }

  public async openWSS() {
    console.log('MessagesController',MessagesController.status)
    if (MessagesController.status === 'online') {
      this.closeWSS();
    }
    const chatId =  store.getState().activeChat?.chatid
    const userId =  store.getState().activeChat?.userId

    if (!chatId || !userId) return;
    const token = await ChatController.getToken(chatId)

    if (!token) return;
  
    const callback = this._events();
    this.wss = new MessagesAPI({ userId, chatId, token, callback });
  }


  public closeWSS() {
    store.set('activeChatMessages', []);
    this.wss.close();

  }

  public sendMessage(data: MessageFormData = {}) {
    const { type = 'get old', content = '0' } = data;
    this.wss.send({ type, content });
  }

  private _onCloseHandler() {
    MessagesController.status = 'offline';
    
  }

  private _onOpenHandler() {
    MessagesController.status = 'online';
    this.sendMessage();
  }


  private _onMessageHandler(e: Event) {
    const res = this.formingResponse(e);
    (!res.data.reason && (Array.isArray(res.data) || res.data?.type === 'message')) 
    {
      const messages =store.getState().activeChatMessages || [];
      const newMessages = Array.isArray(res.data) ? res.data : [res.data];
      store.set('activeChatMessages', (messages).concat(newMessages));
    }
  }

};

export default new MessagesController();
