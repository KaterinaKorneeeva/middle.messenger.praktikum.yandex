import Block from '../../utils/Block';
import template from './login.pug'
import Button from "../../components/Button/Button";
import Input from "../../components/Input/input";
import '../../sass/main.scss'
export class LoginPage extends Block {
  constructor() {
    super({
      label: 'Вход',
      button: new Button({
        label: 'Авторизоваться',
        events: {
          click: () => console.log('clicked')
        }
      }),
      content: [
        new Input({
          inputName: 'login',
          labelName: 'Логин',
          id: 'login',
          errorText: 'Поле некорректно заполнено',
          type: 'text',
          placeholder: 'Логин',
        }),
        new Input({
          inputName: 'password',
          labelName: 'Пароль',
          id: 'password',
          errorText: 'Поле некорректно заполнено',
          type: 'password',
          placeholder: 'Пароль',
        })
      ]
    })
  }

  // protected initChildren() {
  //   console.log('11111', this.props.button);
  //   this.children.button = this.props.button; 
  // }


  render() {
    return this.compile(template, { ...this.props });
  }
}

