import UserApi, { EditProfileData } from '../api/UserApi'
import store from '../utils/Store'


// export interface ControllerSignUpData extends SignUpData {
//   confirmPassword: string
// }


export type EditProfileData = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}



class UserController {
  private api: UserApi

  constructor() {
    this.api = new UserApi()
  }

  public async editProfile(data: EditProfileData) {
    console.log('data',data);
    try {
      const result = await this.api.editProfile(data);
      if (result.status !== 200) {
        throw new Error(`Ошибка: ${result.status} ${result.statusText || result.responseText}`);
      }
      store.set('currentUser', JSON.parse(result.response));
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

}


export default new UserController();
