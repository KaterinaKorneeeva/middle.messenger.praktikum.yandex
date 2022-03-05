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
<<<<<<< HEAD
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
=======
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
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628


  render() {
    return this.compile(template, { ...this.props });
  }
}

