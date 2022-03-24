import HTTP from '../utils/HTTPTransport';
import BaseAPI from './BaseApi';

export type SignUpData = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
}
export type SignInData = {
  login: string;
  password: string;
}

const authAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/chats');

export default class ChatAPI extends BaseAPI {


  public read(): Promise<XMLHttpRequest> {
    return authAPIInstance.get('/', {
      withCredentials: true
    });
  }
}


