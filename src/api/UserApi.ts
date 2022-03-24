import HTTP from '../utils/HTTPTransport';
import BaseAPI from './BaseApi';

export type EditProfileData = {
  email: string
  login: string
  first_name: string
  second_name: string
  phone: string
  password: string
}

export type EditPassData = {
  oldPassword: string
  newPassword: string
}

const settingsAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/user');


export default class UserApi extends BaseAPI {
  public editProfile(data: EditProfileData): Promise<XMLHttpRequest> {
    return settingsAPIInstance.put('/profile', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }
  public editPass(data: EditPassData): Promise<XMLHttpRequest> {
    return settingsAPIInstance.put('/password', {
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }
  public editAvatar(data: any): Promise<XMLHttpRequest> {
    return settingsAPIInstance.put('/profile/avatar', {
      // headers: {},
      withCredentials: true,
      data: JSON.stringify(data)
    });
  }
}

