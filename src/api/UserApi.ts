import HTTP from '../utils/HTTPTransport';
import BaseAPI from './BaseApi';

export type EditProfileData = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
}

const settingsAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/user');


export default class UserApi extends BaseAPI {
  public editProfile(data: EditProfileData): Promise<XMLHttpRequest> {
    return settingsAPIInstance.put('/profile', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }
}

