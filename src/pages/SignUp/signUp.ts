import Block from '../../utils/Block';
import '../../sass/main.scss'
import template from './signUp.pug'
import Input from "../../components/Input/InputField";
import Button from "../../components/Button/Button";
import { renderDOM } from "../../utils/renderDOM";

export class SignUpPage extends Block {
    constructor() {
        super({
            label: 'Регистрация',
            formName: 'Регистрация',
            button: new Button({
                label: 'Зарегистрироваться',
                events: {
                  click: () => console.log('clicked')
                }
              }),
            content: [
                new Input({
                    inputName: 'email',
                    inputValue: '',
                    labelName: '',
                    id: 'mail',
                    errorText: '',
                    type: 'text',
                    placeholder: 'email',
                }),
                new Input({
                    inputName: 'login',
                    inputValue: '',
                    labelName: '',
                    id: 'login',
                    errorText: '',
                    type: 'text',
                    placeholder: 'Логин',
                }),
                new Input({
                    inputName: 'firstName',
                    inputValue: '',
                    labelName: '',
                    id: 'firstName',
                    errorText: '',
                    type: 'text',
                    placeholder: 'Имя',
                }),
                new Input({
                    inputName: 'secondName',
                    inputValue: '',
                    labelName: '',
                    id: 'secondName',
                    errorText: '',
                    type: 'text',
                    placeholder: 'Фамилия',
                }),
                new Input({
                    inputName: 'phone',
                    inputValue: '',
                    labelName: '',
                    id: 'phone',
                    errorText: '',
                    type: 'tel',
                    placeholder: 'Телефон',
                }),
                new Input({
                    inputName: 'password',
                    inputValue: '',
                    labelName: '',
                    id: 'password',
                    errorText: '',
                    type: 'password',
                    placeholder: 'Пароль',
                }),
                new Input({
                    inputName: 'confirmPassword',
                    inputValue: '',
                    labelName: '',
                    id: 'confirmPassword',
                    errorText: '',
                    type: 'password',
                    placeholder: 'Пароль (ещё раз)',
                }),

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
            email: formData.get('email'),
            login: formData.get('login'),
            first_name: formData.get('firstName'),
            second_name: formData.get('secondName'),
            phone: formData.get('phone'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
          };
          console.log('signuppage', data);
      }

    render() {
        return this.compile(template, { ...this.props });
    }
}

const signUpPage = new SignUpPage();
renderDOM(".page", signUpPage);
