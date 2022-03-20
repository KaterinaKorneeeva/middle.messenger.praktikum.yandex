import AuthAPI, { SignUpData, SignInData } from '../api/AuthApi'
import store from '../../src/utils/Store'
import { Router } from '../utils/Router'
import { Path } from '../constants/router';
// import { router } from '../index';
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
      // throw new Error('Passwords are not the same')
      console.log(' Passwords are not the same')
      store.set('currentUser.error', 'Passwords are not the same')
      return
    }

    console.log('signUpsignUpsignUpsignUpsignUp');
    const { confirmPassword, ...SignUpData } = data

    const response = await this.api.signUp(SignUpData);

    if (response.reason) {
      // throw new Error(response.reason)
      store.set('currentUser.error', response.reason)
    }

    // await this.fetchUser()
    // const router = new Router()

    // router.go(Path.Chat)
  }


  public async signIn(data: SignInData) {
    // try {
    await this.api.signIn(data)
    await this.fetchUser()
    console.log('sssssss');
    const router = new Router()
    router.go(Path.Chat)
    // const result = await this.api.signIn(data);
    //   if (result.status !== 200) {
    //     throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
    //   }
    //   // await this.getUserInfo();
    //   // router.go('/messenger');
    // } catch (error) {
    //   console.log(error.message)
    // }
  }

  public async logout() {
    // await this.api.logout()
    // console.log('11272783788')
    // const router = new Router()
    // // router.go(Path.SignIn)
    // router.go('/')
    try {
        console.log('logoutlogout')
      const result = await this.api.logout()
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`)
      }
   
     
    } catch (error) {
      console.log(error.message);
      // const router = new Router()
      // router.go('')
    }

  }

  async fetchUser() {
    try {
      const result = await this.api.read()
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`)
      }
      const userData = JSON.parse(result.response)

      console.log('userDatauserData', userData)
      store.set('currentUser', userData)
    } catch (error) {
      console.log(error.message);
    }
  }

}

export default new AuthController()
