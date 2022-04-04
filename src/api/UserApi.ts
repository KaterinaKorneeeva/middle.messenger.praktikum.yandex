import HTTP from '../utils/HTTPTransport'

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

const settingsAPIInstance = new HTTP('/user')
export default class UserApi {
  public editProfile(data: EditProfileData): Promise<XMLHttpRequest> {
    return settingsAPIInstance.put('/profile', {
      data: JSON.stringify(data)
    });
  }

  public editPass(data: EditPassData): Promise<XMLHttpRequest> {
    return settingsAPIInstance.put('/password', {
      data: JSON.stringify(data)
    });
  }

  public editAvatar(form: any): Promise<XMLHttpRequest> {
    return settingsAPIInstance.put('/profile/avatar', {
      data: form
    });
  }
}

