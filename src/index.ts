import {renderDOM} from './utils/renderDOM'
import {MainPage} from './pages/index';


document.addEventListener('DOMContentLoaded', () => {
    const mainPage = new MainPage() 

    alert(2)
    
    //     console.log('MainPageMainPage',mainPage);
    renderDOM('#app' , `<div>dddd</div>`);
})

// document.addEventListener('DOMContentLoaded', () => {
  
//     const mainPage = new MainPage() 


//     // const button = new Button ({
//     //     label: 'Click me',
//     //     events: {
//     //         click: () => console.log('Clicked')
//     //     }
//     // })

//     console.log('MainPageMainPage',mainPage);
//     renderDOM('#ap11' , mainPage);

//     // // Через секунду контент изменится сам, достаточно обновить пропсы
//     // setTimeout(() => {
//     //     button.setProps({
//     //     text: 'Click me, please',
//     //     });
//     // }, 1000);
// }

// document.addEventListener('DOMContentLoaded', () => {

//     const modalAddPhoto = document.getElementById('modalAddPhoto');
//     const modalEditPass = document.getElementById('modalEditPass');
//     const modalEditProfile = document.getElementById('modalEditProfile');

//     const editProfileBtn = document.querySelector(".profile-info__edit-btn");
//     const editPassBtn = document.querySelector(".profile-info__edit-pass");
//     const addProfileBtn = document.querySelector(".profile-info__add-image");


//     if (addProfileBtn) {
//         addProfileBtn.addEventListener('click', function () {
//             modalAddPhoto.classList.add('active');
//         });
//     }

//     if (editPassBtn) {
//         editPassBtn.addEventListener('click', function () {
//             modalEditPass.classList.add('active');
//         });
//     }

//     if (editProfileBtn) {
//         editProfileBtn.addEventListener('click', function () {
//             modalEditProfile.classList.add('active');
//         });
//     }

//     window.onclick = function (event) {
//         if (event.target == modalAddPhoto) {
//             modalAddPhoto.classList.remove('active');
//         }
//         if (event.target == modalEditPass) {
//             modalEditPass.classList.remove('active');
//         }

//         if (event.target == modalEditProfile) {
//             modalEditProfile.classList.remove('active');
//         }
//     }
// })
