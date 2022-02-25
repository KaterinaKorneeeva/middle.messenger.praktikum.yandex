

import Button from "./components/button/Button";
import LoginPage from "./pages/Login";
// import LoginPage from "./pages/404";
import  {renderDOM}  from "./utils/renderDOM";

document.addEventListener('DOMContentLoaded', () => {

const loginPage = new LoginPage();
// const loginPage = new Error404();
const button = new Button({
  label: 'Click 11111',
  events : {
    click: () => console.log('clicked')
  }
});


// app — это class дива в корне DOM
// renderDOM("#app", button);

renderDOM("#app", loginPage);


// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
  button.setProps({
    label: 'Click me, pleasedd',
    events : {
      click: () => console.log('clickedww')
    }
  });
}, 1000);

})
