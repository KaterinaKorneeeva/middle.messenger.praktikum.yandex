import Block from '../../utils/Block'
import '../../sass/main.scss'
import template from './profile.pug'
import Button from '../../components/Button/Button'
import ButtonSettings from '../../components/Button/SettingsButton'
import ProfileImage from '../../components/ProfileImage'
import Modal from '../../components/Modal/modal'
import Input from '../../components/Input/Input'
import AuthController, {ControllerSignUpData} from '../../../src/controllers/AuthController'
import UserController from '../../controllers/UserController'
import {EditProfileData, EditPassData} from '../../api/UserApi'

import {Path} from "../../constants/router"
import { Router } from '../../utils/Router'

class ProfilePage extends Block {
  constructor(props) {
    super({
      image: new ProfileImage({
        events: {
          click: () => this.handleEditPhotoModal(),
        },
      }),
      email: props.email,
      login: props.login,
      first_name: props.second_name,
      second_name: props.second_name,
      display_name: props.display_name,
      phone: props.phone,

      modalEditProfile: new Modal({
        modalId: 'modalEditProfile',
        modalTitle: 'Изменить данные',
        modalBtnText: 'button-settings--blue',
        modalErrorText: '',
        button: new Button({
          label: 'Сохранить',
        }),
        content: [
          new Input({
            inputName: 'email',
            labelName: 'Почта',
            id: 'mail',
            type: 'text',
            placeholder: 'email',
            inputValue: props.email,
          }),
          new Input({
            inputName: 'login',
            labelName: 'Логин',
            id: 'login',
            type: 'text',
            placeholder: 'Логин',
            inputValue: props.login,
          }),
          new Input({
            inputName: 'firstName',
            labelName: 'Имя',
            id: 'firstName',
            type: 'text',
            placeholder: 'Имя',
            inputValue: props.first_name,
          }),
          new Input({
            inputName: 'secondName',
            labelName: 'Фамилия',
            id: 'secondName',
            type: 'text',
            placeholder: 'Фамилия',
            inputValue: props.second_name,
          }),
          new Input({
            inputName: 'displayName',
            labelName: 'Имя в чате',
            id: 'displayName',
            type: 'text',
            placeholder: 'Имя в чате',
            inputValue: props.display_name,
          }),
          new Input({
            inputName: 'phone',
            labelName: 'Телефон',
            id: 'phone',
            type: 'tel',
            placeholder: 'Телефон',
            inputValue: props.phone,
          }),
        ],

        events: {
          submit: (e: Event) => this.handleSignupSubmit(e),
        },
      }),
      modalEditPass: new Modal({
        modalId: 'modalEditPass',
        modalTitle: 'Изменить пароль',
        modalBtnText: 'button-settings--blue',
        button: new Button({
          label: 'Сохранить',
        }),
        content: [
          new Input({
            inputName: 'oldPassword',
            labelName: 'Старый пароль',
            id: 'oldPassword',
            type: 'password',
            placeholder: 'Старый пароль',
          }),
          new Input({
            inputName: 'newPassword',
            labelName: 'Новый пароль',
            id: 'newPassword',
            type: 'password',
            placeholder: 'Новый пароль',
          }),
          new Input({
            inputName: 'confirmPassword',
            labelName: 'Повторите новый пароль',
            id: 'confirmPassword',
            type: 'password',
            placeholder: 'Повторите новый пароль',
          }),
        ],
        events: {
          submit: (e: Event) => this.handleChangePasSubmit(e),
        },
      }),
      modalAddPhoto: new Modal({
        modalId: 'modalAddPhoto',
        modalTitle: 'Загрузите файл',
        // modalBtnText: 'button-settings--blue',
        button: new Button({
          label: 'Поменять',
        }),
        content: [
          new Input({
            inputName: 'avatar',
            inputValue: '',
            id: 'avatar',
            errorText: '',
            type: 'file',
          }),
        ],
        events: {
          submit: (e: Event) => this.handleChangePhoto(e),
        },
      }),
      buttonEditInfo: new ButtonSettings({
        label: 'Изменить данные',
        className: 'button-settings--blue',
        events: {
          click: () => this.handleClickEditInfo(),
        },
      }),
      buttonEditPass: new ButtonSettings({
        label: 'Изменить пароль',
        className: 'button-settings--blue',
        events: {
          click: () => this.handleClickPassword(),
        },
      }),
      buttonLogout: new ButtonSettings({
        label: 'Выйти',
        className: 'button-settings--red',
        events: {
          click: () => this.handleLogOutClick(),
        },
      }),
      buttonAddPhoto: {
        events: {
          click: () => console.log('buttonAddPhoto'),
        },
      },
    })
    this.route = new Router()
  }


  async handleLogOutClick() {

      AuthController.logout()
       this.route.go('/sign-up');

    }


  handleEditPhotoModal() {
    const modalAddPhoto = document.getElementById('modalAddPhoto')
    modalAddPhoto.classList.add('active')
  }

  handleChangePhoto(e: Event) {
    e.preventDefault()
    const formData = new FormData((e.target as HTMLFormElement))
    const data = {
      avatar: formData.get('avatar'),
    }

    console.log('changePhoto', data)

    const modalAddPhoto = document.getElementById('modalAddPhoto')
    modalAddPhoto.classList.remove('active')
  }
  public handleClickEditInfo() {
    const modalEditProfile = document.getElementById('modalEditProfile')
    modalEditProfile.classList.add('active')
  }

  public async handleSignupSubmit(e: Event) {
    e.preventDefault()
    const formData = new FormData((e.target as HTMLFormElement))
    const data = {
      first_name: formData.get('firstName'),
      second_name: formData.get('secondName'),
      display_name: formData.get('displayName'),
      login: formData.get('login'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    }

    console.log('changeProfile', data)

    try {
      await UserController.editProfile(data as EditProfileData)
      
    } catch (e) {
      console.log('error', e)
    }

    const modalEditProfile = document.getElementById('modalEditProfile')
    modalEditProfile.classList.remove('active')
  }
  public async handleChangePasSubmit(e: Event) {
    e.preventDefault()
    const formData = new FormData((e.target as HTMLFormElement))
    const data = {
      oldPassword: formData.get('oldPassword'),
      newPassword: formData.get('newPassword'),
      confirmPassword: formData.get('confirmPassword'),
    }
    console.log('ChangePas', data)

    try {
      await UserController.editPass(data as EditPassData)
      
    } catch (e) {
      console.log('error', e)
    }
    
    const modalEditPass = document.getElementById('modalEditPass')
    modalEditPass.classList.remove('active')
  }

  public handleClickPassword() {
    const modalEditPass = document.getElementById('modalEditPass')
    modalEditPass.classList.add('active')
  }


  render() {
    return this.compile(template, { ...this.props })
  }
}


export default ProfilePage;
