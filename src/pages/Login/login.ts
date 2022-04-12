import { compile } from 'pug'
import Block from '../../utils/Block'
import {loginTemplate} from './login.tmpl'
import Button from '../../components/Button/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import '../../sass/main.scss'
import AuthController from '../../../src/controllers/AuthController'
import{ SignInData} from '../../api/AuthApi'
import {Path} from '../../constants/router'
import {router} from '../../index'

export class LoginPage extends Block {
  constructor() {
    super({
      label: 'Вход',
      button: new Button({
        label: 'Авторизоваться',
      }),
      linkToSignUp: new Link({
        label: 'Нет аккаунта?',
        events: {
          click: () => this.onClick()
        }
      }),
      content: [
        new Input({
          inputName: 'login',
          id: 'login',
          type: 'text',
          placeholder: 'Логин',
          required: true,
        }),
        new Input({
          inputName: 'password',
          id: 'password',
          type: 'password',
          placeholder: 'Пароль',
          required: true,
        }),
      ],
      events: {
        submit: (e: Event) => this.handleSubmit(e),
      },
    })
  }

  
  onClick() {
    router.go(Path.SignUp)
  }

  handleSubmit(e: Event) {
    e.preventDefault()
    const formData = new FormData((e.target as HTMLFormElement))
    const data = {
      login: formData.get('login'),
      password: formData.get('password'),
    }
    console.log('signinForm', data)
    AuthController.signIn(data as SignInData)
  }

  render() {
    return this.compile(compile(loginTemplate), { ...this.props })
  }
}


