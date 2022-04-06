import UserApi, { EditProfileData, EditPassData } from '../api/UserApi'
import store from '../utils/Store'
import { adaptUsersData } from '../utils/profile'

class UserController {
  private api: UserApi

  constructor() {
    this.api = new UserApi()
  }

  public async editProfile(data: EditProfileData) {
    try {
      const result = await this.api.editProfile(data)
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`)
      }
      store.set('currentUser', JSON.parse(result.response))
      return result
    } catch (error) {
      console.log(error.message)
    }
  }

  public async editPass(data: EditPassData) {
    try {
      const result = await this.api.editPass(data)
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`)
      }
      return result
    } catch (error) {
      console.log(error.message)
    }

  }

  public async editAvatar(data: FormData) {
    try {
      const result = await this.api.editAvatar(data)
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`)
      }

      store.set('currentUser', adaptUsersData(JSON.parse(result.response)))
      return result
    } catch (error) {
      console.log(error.message)
    }
  }

}


export default new UserController()
