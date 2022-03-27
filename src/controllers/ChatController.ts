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

  public async addUsersChat(data: any) {
    try {
      const result = await this.api.addUsersChat(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      return result;
    } catch (error) {
      console.log(error.message)
    }
  }

  public async deleteUsersChat(data: any) {
    try {
      const result = await this.api.deleteUsersChat(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      return result;
    } catch (error) {
      console.log(error.message)
    }
  }
  
  public async createChat(data: ChatData) {
    return  await this.api.createChat(data).then(() => {
      this.fetchChats()
    });
  }


}


export default new ChatController();
