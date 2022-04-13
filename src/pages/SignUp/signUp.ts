import { compile } from 'pug'
import Block from '../../utils/Block'
import '../../sass/main.scss'
import {signupTemplate}  from './signup.tmpl'
import Input from '../../components/Input'
import Button from '../../components/Button/Button'
import AuthController, { ControllerSignUpData } from '../../../src/controllers/AuthController'
import Link from '../../components/Link'
import { Path } from '../../constants/router'
import {router} from '../../index'
export class SignUpPage extends Block {
  constructor(props:any) {
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
          required: true,
        }),
        new Input({
          inputName: 'login',
          id: 'login',
          type: 'text',
          placeholder: 'Логин',
          required: true,
        }),
        new Input({
          inputName: 'firstName',
          id: 'firstName',
          type: 'text',
          placeholder: 'Имя',
          required: true,
        }),
        new Input({
          inputName: 'secondName',
          id: 'secondName',
          type: 'text',
          placeholder: 'Фамилия',
          required: true,
        }),
        new Input({
          inputName: 'phone',
          id: 'phone',
          type: 'tel',
          placeholder: 'Телефон',
          required: true,
        }),
        new Input({
          inputName: 'password',
          id: 'password',
          errorText: '',
          type: 'password',
          placeholder: 'Пароль',
          required: true,
        }),
        new Input({
          inputName: 'confirmPassword',
          id: 'confirmPassword',
          type: 'password',
          placeholder: 'Пароль (ещё раз)',
          required: true,
        }),
      ],
      events: {
        submit: (e: Event) => this.handleSubmit(e),
      },
    })
  }

  onClick() {
    router.go(Path.SignIn)
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
    return this.compile(compile(signupTemplate), { ...this.props })
  }
}
