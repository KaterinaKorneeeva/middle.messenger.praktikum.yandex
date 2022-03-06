import Block from '../../utils/Block';
import template from './login.pug'
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import '../../sass/main.scss'
export class LoginPage extends Block {
  constructor() {
    super({
      label: 'Вход',
      button: new Button({
        label: 'Авторизоваться',
      }),
    
      content: [
        new Input({
          inputName: 'login',
          inputValue: '',
          labelName: '',
          id: 'login',
          errorText: '',
          type: 'text',
          placeholder: 'Логин',
          required: true,
        }),
        new Input({
          inputName: 'password',
          inputValue: '',
          labelName: '',
          id: 'password',
          errorText: '',
          type: 'password',
          placeholder: 'Пароль',
          required: true,
        })
      ],
      events: {
        submit: (e: Event) => this.handleSubmit(e),
      },
    })
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    const formData = new FormData((e.target as HTMLFormElement));
    const data = {
        login: formData.get('login'),
        password: formData.get('password'),
      };
      
    console.log('signinForm', data);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

