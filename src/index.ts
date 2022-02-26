import Button from "./components/button/Button";
import LoginPage from "./pages/Login";
import Error404 from "./pages/Errors/404";
import  {renderDOM}  from "./utils/renderDOM";
import './sass/main.scss'

import { Error } from './components/Error'

document.addEventListener('DOMContentLoaded', () => {

const loginPage = new LoginPage();

// const errorPage = new Error404();

// const button = new Button({
//   label: 'Click',
//   events : {
//     click: () => console.log('clicked')
//   }
// });


const error = new Error({
  errorTitle: 'Ошибка 404',
  errorSubTitle: 'Не туда попали',
  errorBtnText: 'Назад к чатам',
});

// const errorPage = new Error404();
        
  // app — это class дива в корне DOM
  // renderDOM("#app", button);
  renderDOM("#app", loginPage);
  // renderDOM("#app", error);
// Через секунду контент изменится сам, достаточно обновить пропсы
// setTimeout(() => {
//   button.setProps({
//     label: 'Click me, pleasedd',
//     events : {
//       click: () => console.log('clickedww')
//     }
//   });
// }, 1000);

})
