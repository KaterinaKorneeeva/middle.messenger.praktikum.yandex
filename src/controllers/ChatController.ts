import ChatApi, { ChatData } from '../api/ChatApi'
import store from '../utils/Store'
import { resolveAvatarSrc } from '../utils/profile';
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
          avatar: resolveAvatarSrc(item.avatar),
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

  // public async createChat(data: ChatData) {
  //   try {
  //     const result = await this.api.createChat(data);
  //     if (result.status !== 200) {
  //       throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
  //     }

  //     const test = store.getState().chats 
  //     console.log('testtest',test)

  //     store.set('chats', JSON.parse(result.response));
  //     return result;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }


  public async createChat(data: ChatData) {
    return  await this.api.createChat(data).then(() => {
      this.fetchChats();
    });
  }


}


export default new ChatController();
