import Block from '../../utils/Block';
import Form from '../../components/Form/form'
import '../../sass/main.scss'
import template from './signUp.pug'
import Input from "../../components/Input/input";
import Button from "../../components/Button";
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
                    labelName: 'Почта',
                    id: 'mail',
                    errorText: 'Поле некорректно заполнено',
                    type: 'text',
                    placeholder: 'email',
                }),
                new Input({
                    inputName: 'login',
                    labelName: 'Логин',
                    id: 'login',
                    errorText: 'Поле некорректно заполнено',
                    type: 'text',
                    placeholder: 'Логин',
                }),
                new Input({
                    inputName: 'firstName',
                    labelName: 'Имя',
                    id: 'firstName',
                    errorText: 'Поле некорректно заполнено',
                    type: 'text',
                    placeholder: 'Имя',
                }),
                new Input({
                    inputName: 'secondName',
                    labelName: 'Фамилия',
                    id: 'secondName',
                    errorText: 'Поле некорректно заполнено',
                    type: 'text',
                    placeholder: 'Фамилия',
                }),
                new Input({
                    inputName: 'phone',
                    labelName: 'Телефон',
                    id: 'phone',
                    errorText: 'Поле некорректно заполнено',
                    type: 'tel',
                    placeholder: 'Телефон',
                }),
                new Input({
                    inputName: 'password',
                    labelName: 'Пароль',
                    id: 'password',
                    errorText: 'Поле некорректно заполнено',
                    type: 'password',
                    placeholder: 'Пароль',
                }),
                new Input({
                    inputName: 'confirmPassword',
                    labelName: 'Пароль (ещё раз)',
                    id: 'confirmPassword',
                    errorText: 'Поле некорректно заполнено',
                    type: 'password',
                    placeholder: 'Пароль (ещё раз)',
                }),

            ],

            events: {
                submit: (e: Event) => this.onSubmit(e),
            },
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

const signUpPage = new SignUpPage();
renderDOM(".page", signUpPage);
