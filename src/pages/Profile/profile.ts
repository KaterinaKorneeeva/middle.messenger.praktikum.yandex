import Block from '../../utils/Block';
import '../../sass/main.scss'
import template from './profile.pug'
import Button from "../../components/Button/Button";
import ButtonSettings from "../../components/Button/SettingsButton";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/input";
import { renderDOM } from "../../utils/renderDOM";


export class Profile extends Block {
    constructor() {
        super({
            label: 'fields',
            fields: [
                { name: 'Почта', value: 'pochta@yandex.ru' },
                { name: 'Логин', value: 'ivanivanov' },
                { name: 'Имя', value: 'Иван' },
                { name: 'Фамилия', value: 'Иванов' },
                { name: 'Имя в чате', value: 'ivan' },
                { name: 'Телефон', value: '+7 (909) 967 30 30' }
            ],
            modalEditProfile: new Modal ({
                modalId: 'modalEditProfile',
                modalTitle: 'Изменить данные',
                modalBtnText: 'button-settings--blue',
                modalErrorText: 'modalErrorTextmodalErrorText',
                button: new Button({
                    label: 'Зарегистрироваться',
                    events: {
                      click: () => console.log('Register')
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
            }),
            modalEditPass: new Modal ({
                modalId: 'modalEditPass',
                modalTitle: 'Изменить пароль',
                modalBtnText: 'button-settings--blue',
                modalErrorText: 'modalErrorTextmodalErrorText',
                button: new Button({
                    label: 'Зарегистрироваться',
                    events: {
                      click: () => console.log('Register')
                    }
                }),
                content: [
                    new Input({
                        inputName: 'oldPassword',
                        labelName: 'Старый пароль',
                        id: 'oldPassword',
                        errorText: 'Поле некорректно заполнено',
                        type: 'password',
                        placeholder: 'Старый пароль',
                    }),
                    new Input({
                        inputName: 'newPassword',
                        labelName: 'Новый пароль',
                        id: 'newPassword',
                        errorText: 'Поле некорректно заполнено',
                        type: 'password',
                        placeholder: 'Новый пароль',
                    }),
                    new Input({
                        inputName: 'confirmPassword',
                        labelName: 'Повторите новый пароль',
                        id: 'confirmPassword',
                        errorText: 'Поле некорректно заполнено',
                        type: 'password',
                        placeholder: 'Повторите новый пароль',
                    }),
                ],
            }),
            buttonEditInfo: new ButtonSettings({
                label: 'Изменить данные',
                className: 'button-settings--blue',
                events: {
                    click: () => this.handleClickEditInfo(),
                }
            }),
            buttonEditPass: new ButtonSettings({
                label: 'Изменить пароль',
                className: 'button-settings--blue',
                events: {
                    click: () => this.handleClickPassword(),
                }
            }),
            buttonLogout: new ButtonSettings({
                label: 'Выйти',
                className: 'button-settings--red',
                events: {
                    click: () => console.log('logout')
                }
            }),
        })
    }

   


    public handleClickEditInfo() {
        
        const modalEditProfile = document.getElementById('modalEditProfile');
        modalEditProfile.classList.add('active');
        // this.setProps({ 
        //     state: 'edit-profile',
        // });
    }

    public handleClickPassword() {
        const modalEditPass = document.getElementById('modalEditPass');
        modalEditPass.classList.add('active');
    //   alert(1)
    //     const modalEditProfile = document.querySelector('.modal');
    //     alert(modalEditProfile)
    //     modalEditProfile.classList.remove('active');
    
    }

    // protected initChildren() {
    //   console.log('11111', this.props.button);
    //   this.children.button = this.props.button; 
    // }


    render() {

        return this.compile(template, { ...this.props });
    }
}

const profile = new Profile();
renderDOM(".page", profile);


