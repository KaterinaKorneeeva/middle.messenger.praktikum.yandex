import Block from '../../utils/Block';
import '../../sass/main.scss'
import template from './profile.pug'
import Button from "../../components/Button/Button";
import ButtonSettings from "../../components/Button/SettingsButton";
<<<<<<< HEAD
import ProfileImage from "../../components/ProfileImage/ProfileImage";
=======
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/input";
import { renderDOM } from "../../utils/renderDOM";


export class Profile extends Block {
    constructor() {
        super({
            label: 'fields',
<<<<<<< HEAD
            image: new ProfileImage({
                events: {
                    click: () => this.handleEditPhotoModal(),
                },
            }),
=======
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
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
<<<<<<< HEAD
                modalErrorText: '',
                button: new Button({
                    label: 'Зарегистрироваться',
=======
                modalErrorText: 'modalErrorTextmodalErrorText',
                button: new Button({
                    label: 'Зарегистрироваться',
                    events: {
                      click: () => console.log('Register')
                    }
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                }),
                content: [
                    new Input({
                        inputName: 'email',
<<<<<<< HEAD
                        inputValue: '',
                        labelName: 'Почта',
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
                        labelName: 'Логин',
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
                        labelName: 'Имя',
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
                        labelName: 'Фамилия',
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
=======
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
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
            }),
            modalEditPass: new Modal ({
                modalId: 'modalEditPass',
                modalTitle: 'Изменить пароль',
                modalBtnText: 'button-settings--blue',
<<<<<<< HEAD
                button: new Button({
                    label: 'Сохранить',
=======
                modalErrorText: 'modalErrorTextmodalErrorText',
                button: new Button({
                    label: 'Зарегистрироваться',
                    events: {
                      click: () => console.log('Register')
                    }
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                }),
                content: [
                    new Input({
                        inputName: 'oldPassword',
<<<<<<< HEAD
                        inputValue: '',
=======
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                        labelName: 'Старый пароль',
                        id: 'oldPassword',
                        errorText: 'Поле некорректно заполнено',
                        type: 'password',
                        placeholder: 'Старый пароль',
                    }),
                    new Input({
                        inputName: 'newPassword',
<<<<<<< HEAD
                        inputValue: '',
=======
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                        labelName: 'Новый пароль',
                        id: 'newPassword',
                        errorText: 'Поле некорректно заполнено',
                        type: 'password',
                        placeholder: 'Новый пароль',
                    }),
                    new Input({
                        inputName: 'confirmPassword',
<<<<<<< HEAD
                        inputValue: '',
=======
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
                        labelName: 'Повторите новый пароль',
                        id: 'confirmPassword',
                        errorText: 'Поле некорректно заполнено',
                        type: 'password',
                        placeholder: 'Повторите новый пароль',
                    }),
                ],
<<<<<<< HEAD
                events: {
                    submit: (e: Event) => this.handleChangePasSubmit(e),
                  },
            }),
            modalAddPhoto: new Modal ({
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
=======
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
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
<<<<<<< HEAD
            buttonAddPhoto:{
                events: {
                    click: () => console.log('buttonAddPhoto')
                }
            }
=======
>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628
        })
    }

   
<<<<<<< HEAD
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

=======


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

>>>>>>> ec57666b528b8dfa057225af843d9b1d95766628

    render() {

        return this.compile(template, { ...this.props });
    }
}

const profile = new Profile();
renderDOM(".page", profile);


