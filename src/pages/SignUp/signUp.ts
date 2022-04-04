import Block from '../../utils/Block'
import '../../sass/main.scss'
import template from './signUp.pug'
import Input from '../../components/Input'
import Button from '../../components/Button/Button'
import AuthController, { ControllerSignUpData } from '../../../src/controllers/AuthController'
import Link from '../../components/Link'
import { Router } from '../../utils/Router';
import { Path } from '../../constants/router'
export class SignUpPage extends Block {
  constructor(props) {
    super({
      label: 'Регистрация',
      formName: 'Регистрация',
      button: new Button({
        label: 'Зарегистрироваться',
      }),
      errorText: props.error,
      linkToSignIn: new Link({
        label: 'войти',
        events: {
          click: () => this.onClick()
        }
      }),
      content: [
        new Input({
          inputName: 'email',
          id: 'mail',
          type: 'text',
          placeholder: 'email',
        }),
        new Input({
          inputName: 'login',
          id: 'login',
          type: 'text',
          placeholder: 'Логин',
        }),
        new Input({
          inputName: 'firstName',
          id: 'firstName',
          type: 'text',
          placeholder: 'Имя',
        }),
        new Input({
          inputName: 'secondName',
          id: 'secondName',
          type: 'text',
          placeholder: 'Фамилия',
        }),
        new Input({
          inputName: 'phone',
          id: 'phone',
          type: 'tel',
          placeholder: 'Телефон',
        }),
        new Input({
          inputName: 'password',
          id: 'password',
          errorText: '',
          type: 'password',
          placeholder: 'Пароль',
        }),
        new Input({
          inputName: 'confirmPassword',
          id: 'confirmPassword',
          type: 'password',
          placeholder: 'Пароль (ещё раз)',
        }),
      ],
      events: {
        submit: (e: Event) => this.handleSubmit(e),
      },
    })
    this.route = new Router()
  }

  onClick() {
    this.route.go(Path.SignIn)
  }

  async handleSubmit(e: Event) {
    e.preventDefault()
    const formData = new FormData((e.target as HTMLFormElement))

    const data = {
      email: formData.get('email'),
      login: formData.get('login'),
      first_name: formData.get('firstName'),
      second_name: formData.get('secondName'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    }

    try {
      await AuthController.signUp(data as ControllerSignUpData)
    } catch (e) {
      console.log('error', e)
    }
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
