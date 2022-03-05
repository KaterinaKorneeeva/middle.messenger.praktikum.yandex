import Block from '../../utils/Block';
import Form from '../../components/Form/form'
import '../../sass/main.scss'
import template from './signUp.pug'
import Input from "../../components/Input/input";
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
<<<<<<< HEAD
                    inputValue: '',
                    labelName: '',
                    id: 'mail',
                    errorText: '',
=======
                    labelName: 'Почта',
                    id: 'mail',
                    errorText: 'Поле некорректно заполнено',
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                    type: 'text',
                    placeholder: 'email',
                }),
                new Input({
                    inputName: 'login',
<<<<<<< HEAD
                    inputValue: '',
                    labelName: '',
                    id: 'login',
                    errorText: '',
=======
                    labelName: 'Логин',
                    id: 'login',
                    errorText: 'Поле некорректно заполнено',
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                    type: 'text',
                    placeholder: 'Логин',
                }),
                new Input({
                    inputName: 'firstName',
<<<<<<< HEAD
                    inputValue: '',
                    labelName: '',
                    id: 'firstName',
                    errorText: '',
=======
                    labelName: 'Имя',
                    id: 'firstName',
                    errorText: 'Поле некорректно заполнено',
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                    type: 'text',
                    placeholder: 'Имя',
                }),
                new Input({
                    inputName: 'secondName',
<<<<<<< HEAD
                    inputValue: '',
                    labelName: '',
                    id: 'secondName',
                    errorText: '',
=======
                    labelName: 'Фамилия',
                    id: 'secondName',
                    errorText: 'Поле некорректно заполнено',
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                    type: 'text',
                    placeholder: 'Фамилия',
                }),
                new Input({
                    inputName: 'phone',
<<<<<<< HEAD
                    inputValue: '',
                    labelName: '',
                    id: 'phone',
                    errorText: '',
=======
                    labelName: 'Телефон',
                    id: 'phone',
                    errorText: 'Поле некорректно заполнено',
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                    type: 'tel',
                    placeholder: 'Телефон',
                }),
                new Input({
                    inputName: 'password',
<<<<<<< HEAD
                    inputValue: '',
                    labelName: '',
                    id: 'password',
                    errorText: '',
=======
                    labelName: 'Пароль',
                    id: 'password',
                    errorText: 'Поле некорректно заполнено',
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                    type: 'password',
                    placeholder: 'Пароль',
                }),
                new Input({
                    inputName: 'confirmPassword',
<<<<<<< HEAD
                    inputValue: '',
                    labelName: '',
                    id: 'confirmPassword',
                    errorText: '',
=======
                    labelName: 'Пароль (ещё раз)',
                    id: 'confirmPassword',
                    errorText: 'Поле некорректно заполнено',
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                    type: 'password',
                    placeholder: 'Пароль (ещё раз)',
                }),

            ],

            events: {
<<<<<<< HEAD
                submit: (e: Event) => this.handleSubmit(e),
=======
                submit: (e: Event) => this.onSubmit(e),
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
            },
        })
    }

<<<<<<< HEAD
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
=======
    // protected initChildren() {
    //   console.log('11111', this.props.button);
    //   this.children.button = this.props.button; 
    // }

>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628

    render() {
        return this.compile(template, { ...this.props });
    }
}

const signUpPage = new SignUpPage();
renderDOM(".page", signUpPage);
