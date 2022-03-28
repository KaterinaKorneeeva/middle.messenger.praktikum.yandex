import Block from '../../utils/Block'
import template from './login.pug'
import Button from '../../components/Button/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import '../../sass/main.scss'
import AuthController, {ControllerSignUpData} from '../../../src/controllers/AuthController'
import{ SignInData} from '../../api/AuthApi'
import { Router } from '../../utils/Router'
import {Path} from "../../constants/router"
import store from '../../utils/Store'

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
    this.route = new Router()
  }

  async componentDidMount() {
    try {
      await AuthController.fetchUser();
      if (store.getState().currentUser) {
        this.route.go('/messenger');
      }
    }
    catch (e) {
      console.log('eeeeeess', e);
      this.route.go('/')
    }
  }

  onClick() {
    console.log('Path.SignUp')
    this.route.go(Path.SignUp)
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
    return this.compile(template, { ...this.props })
  }
}


