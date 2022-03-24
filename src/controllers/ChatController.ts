import ChatApi from '../api/ChatApi'
import store from '../utils/Store'

class ChatController {
  private api: ChatApi

  constructor() {
    this.api = new ChatApi()
  }

  public async fetchChats() {
    try {
      const result = await this.api.read();
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }

      const arrOfChats = (JSON.parse(result.response) as any).map((item: any) => {
        return  ({
          avatar: item.avatar,
          title: item.title,
          last_message: item.last_message,
          chatDate: '10:49',
          unread_count: item.unread_count,
          id: item.id,
        });
      });
      store.set('chats', arrOfChats);
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

}


export default new ChatController();
