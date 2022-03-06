import Block from '../../utils/Block';
import '../../sass/main.scss'
import template from './profile.pug'
import Button from "../../components/Button/Button";
import ButtonSettings from "../../components/Button/SettingsButton";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/InputField";
import { renderDOM } from "../../utils/renderDOM";


export class Profile extends Block {
    constructor() {
        super({
            label: 'fields',
            image: new ProfileImage({
                events: {
                    click: () => this.handleEditPhotoModal(),
                },
            }),
            fields: [
                { name: 'Почта', value: 'pochta@yandex.ru' },
                { name: 'Логин', value: 'ivanivanov' },
                { name: 'Имя', value: 'Иван' },
                { name: 'Фамилия', value: 'Иванов' },
                { name: 'Имя в чате', value: 'ivan' },
                { name: 'Телефон', value: '+7 (909) 967 30 30' }
            ],
            modalEditProfile: new Modal({
                modalId: 'modalEditProfile',
                modalTitle: 'Изменить данные',
                modalBtnText: 'button-settings--blue',
                modalErrorText: '',
                button: new Button({
                    label: 'Зарегистрироваться',
                }),
                content: [
                    new Input({
                        inputName: 'email',
                        inputValue: '',
                        labelName: 'Почта',
                        id: 'mail',
                        errorText: '',
                        type: 'text',
                        placeholder: 'email',
                    }),
                    new Input({
                        inputName: 'login',
                        inputValue: '',
                        labelName: 'Логин',
                        id: 'login',
                        errorText: '',
                        type: 'text',
                        placeholder: 'Логин',
                    }),
                    new Input({
                        inputName: 'firstName',
                        inputValue: '',
                        labelName: 'Имя',
                        id: 'firstName',
                        errorText: '',
                        type: 'text',
                        placeholder: 'Имя',
                    }),
                    new Input({
                        inputName: 'secondName',
                        inputValue: '',
                        labelName: 'Фамилия',
                        id: 'secondName',
                        errorText: '',
                        type: 'text',
                        placeholder: 'Фамилия',
                    }),
                    new Input({
                        inputName: 'phone',
                        inputValue: '',
                        labelName: 'Телефон',
                        id: 'phone',
                        errorText: '',
                        type: 'tel',
                        placeholder: 'Телефон',
                    }),
                ],

                events: {
                    submit: (e: Event) => this.handleSignupSubmit(e),
                },
            }),
            modalEditPass: new Modal({
                modalId: 'modalEditPass',
                modalTitle: 'Изменить пароль',
                modalBtnText: 'button-settings--blue',
                button: new Button({
                    label: 'Сохранить',
                }),
                content: [
                    new Input({
                        inputName: 'oldPassword',
                        inputValue: '',
                        labelName: 'Старый пароль',
                        id: 'oldPassword',
                        errorText: 'Поле некорректно заполнено',
                        type: 'password',
                        placeholder: 'Старый пароль',
                    }),
                    new Input({
                        inputName: 'newPassword',
                        inputValue: '',
                        labelName: 'Новый пароль',
                        id: 'newPassword',
                        errorText: 'Поле некорректно заполнено',
                        type: 'password',
                        placeholder: 'Новый пароль',
                    }),
                    new Input({
                        inputName: 'confirmPassword',
                        inputValue: '',
                        labelName: 'Повторите новый пароль',
                        id: 'confirmPassword',
                        errorText: 'Поле некорректно заполнено',
                        type: 'password',
                        placeholder: 'Повторите новый пароль',
                    }),
                ],
                events: {
                    submit: (e: Event) => this.handleChangePasSubmit(e),
                },
            }),
            modalAddPhoto: new Modal({
                modalId: 'modalAddPhoto',
                modalTitle: 'Загрузите файл',
                // modalBtnText: 'button-settings--blue',
                button: new Button({
                    label: 'Поменять',
                }),
                content: [
                    new Input({
                        inputName: 'avatar',
                        inputValue: '',
                        id: 'avatar',
                        errorText: '',
                        type: 'file',
                    }),
                ],
                events: {
                    submit: (e: Event) => this.handleChangePhoto(e),
                },
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
            buttonAddPhoto: {
                events: {
                    click: () => console.log('buttonAddPhoto')
                }
            }
        })
    }


    handleEditPhotoModal() {
        const modalAddPhoto = document.getElementById('modalAddPhoto');
        modalAddPhoto.classList.add('active');
    }


    handleChangePhoto(e: Event) {
        e.preventDefault();
        const formData = new FormData((e.target as HTMLFormElement));
        const data = {
            avatar: formData.get('avatar'),
        };

        console.log('changePhoto', data);

        const modalAddPhoto = document.getElementById('modalAddPhoto');
        modalAddPhoto.classList.remove('active');
    }
    public handleClickEditInfo() {
        const modalEditProfile = document.getElementById('modalEditProfile');
        modalEditProfile.classList.add('active');
    }

    public handleSignupSubmit(e: Event) {
        e.preventDefault();
        const formData = new FormData((e.target as HTMLFormElement));
        const data = {
            email: formData.get('email'),
            login: formData.get('login'),
            first_name: formData.get('firstName'),
            second_name: formData.get('secondName'),
            display_name: formData.get('display_name'),
            phone: formData.get('phone'),
        };

        console.log('changeProfile', data);

        const modalEditProfile = document.getElementById('modalEditProfile');
        modalEditProfile.classList.remove('active');
    }
    public handleChangePasSubmit(e: Event) {
        e.preventDefault();
        const formData = new FormData((e.target as HTMLFormElement));
        const data = {
            oldPassword: formData.get('oldPassword'),
            newPassword: formData.get('newPassword'),
            confirmPassword: formData.get('confirmPassword'),
        };
        console.log('ChangePas', data);

        const modalEditPass = document.getElementById('modalEditPass');
        modalEditPass.classList.remove('active');
    }


    public handleClickPassword() {
        const modalEditPass = document.getElementById('modalEditPass');
        modalEditPass.classList.add('active');
    }


    render() {

        return this.compile(template, { ...this.props });
    }
}

const profile = new Profile();
renderDOM(".page", profile);


