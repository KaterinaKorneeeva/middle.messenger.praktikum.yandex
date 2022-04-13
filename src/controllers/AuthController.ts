import AuthAPI, { SignUpData, SignInData } from '../api/AuthApi'
import store from '../../src/utils/Store'
import { Path } from '../constants/router'
import { adaptUsersData } from '../utils/profile'
import { Router } from '../utils/Router'
export interface ControllerSignUpData extends SignUpData {
  confirmPassword: string
}

class AuthController {
  private api: AuthAPI
  
  constructor() {
    this.api = new AuthAPI()
  }
 

  public async signUp(data: ControllerSignUpData) {
    if (data.confirmPassword !== data.password) {
      console.log(' Passwords are not the same')
      return
    }
    const { confirmPassword, ...SignUpData } = data

    const response = await this.api.signUp(SignUpData)
    return response
  }

  public async signIn(data: SignInData) {
    await this.api.signIn(data)
    await this.fetchUser()
    const router = new Router()
    console.log('Path.Chat)',Path.Chat)
    router.go(Path.Chat)
  }

  

  public async logout() {
    try {
      const result = await this.api.logout()
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`)
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  async fetchUser() {
    try {
      const result = await this.api.getUser()
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`)
      }
      const userData = adaptUsersData(JSON.parse(result.response))
      store.set('currentUser', userData)
    } catch (error) {
      console.log(error.message)
    }
  }

}

export default new AuthController()
