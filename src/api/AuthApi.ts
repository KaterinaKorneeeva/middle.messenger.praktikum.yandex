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
export type SignInData = {
  login: string
  password: string
}

const authAPIInstance = new HTTP('/auth')

export default class AuthAPI extends BaseAPI {

  public signUp(data: SignUpData): Promise<XMLHttpRequest> {
    return authAPIInstance.post('/signup', {
      data: JSON.stringify(data)
    });
  }
  
  public async logout(): Promise<XMLHttpRequest> {
    return authAPIInstance.post('/logout', {
    }
    );
  }

  public async signIn(data: SignInData): Promise<XMLHttpRequest> {
    return await authAPIInstance.post('/signin', {
      data: JSON.stringify(data)
    });
  }

  public read(): Promise<XMLHttpRequest> {
    return authAPIInstance.get('/user', {
    });
  }
}

