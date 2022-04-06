import HTTP from '../utils/HTTPTransport'

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

export default class ChatAPI {

  public getChats(): Promise<XMLHttpRequest> {
    return authAPIInstance.get('/')
  }

  public createChat(data: ChatData): Promise<XMLHttpRequest> {
    return authAPIInstance.post('/', {
      data: JSON.stringify(data)
    })
  }

  public addUsersChat(data: ChatData): Promise<XMLHttpRequest> {
    return authAPIInstance.put('/users', {
      data: JSON.stringify(data)
    })
  }

  public deleteUsersChat(data: ChatData): Promise<XMLHttpRequest> {
    return authAPIInstance.delete('/users', {
      data: JSON.stringify(data)
    })
  }

  public getToken(chatId: number) {
    return authAPIInstance.post(`/token/${chatId}`)
  }

}


