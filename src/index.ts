import Button from "./components/button/Button";
import LoginPage from "./pages/Login";
import  {renderDOM}  from "./utils/renderDOM";
import './sass/main.scss'


document.addEventListener('DOMContentLoaded', () => {

const loginPage = new LoginPage();

// const button = new Button({
//   label: 'Click',
//   events : {
//     click: () => console.log('clicked')
//   }
// });

  // app — это class дива в корне DOM
  // renderDOM("#app", button);
  renderDOM("#app", loginPage);

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
