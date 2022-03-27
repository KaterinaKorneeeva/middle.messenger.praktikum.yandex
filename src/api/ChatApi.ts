import HTTP from '../utils/HTTPTransport'
import BaseAPI from './BaseApi'

export type SignUpData = {
  email: string
  login: string
  first_name: string
  second_name: string
  phone: string
  password: string
}
export type ChatData = {
  title: string
}

const authAPIInstance = new HTTP('/chats')

export default class ChatAPI extends BaseAPI {

  public read(): Promise<XMLHttpRequest> {
    return authAPIInstance.get('/', {
    });
  }

  public createChat(data: ChatData): Promise<XMLHttpRequest> {
    return authAPIInstance.post('/', {
      data: JSON.stringify(data)
    });
  }
}


