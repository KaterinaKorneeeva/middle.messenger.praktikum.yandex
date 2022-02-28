import LoginPage from "./pages/Login";
import  {renderDOM}  from "./utils/renderDOM";
import './sass/main.scss'


document.addEventListener('DOMContentLoaded', () => {

const loginPage = new LoginPage();

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
