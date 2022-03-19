import LoginPage from './pages/Login'
import ChatPage from './pages/Chat'
import ProfilePage from './pages/Profile'
import SignUpPage from './pages/SignUp'
import Error404  from "./pages/Errors/404";
import Error500 from "./pages/Errors/500";
import {Path} from "./constants/router";

import { Router } from './utils/Router';
import './sass/main.scss'


const router = new Router('#app');
console.log('router',router)
  


// Можно обновиться на /user и получить сразу пользователя
router
  .use(Path.SignIn, LoginPage)
  .use(Path.SignUp, SignUpPage)
  .use(Path.Profile, ProfilePage)
  .use(Path.Chat, ChatPage)
  .use(Path.Error404, Error404)
  .use(Path.Error500, Error500)
  .start();

// // Через секунду контент изменится сам, достаточно дёрнуть переход
// setTimeout(() => {
//   router.go("/users");
// }, 1000);

// // А можно и назад
// setTimeout(() => {
//   router.back();
// }, 3000);

// // И снова вперёд
// setTimeout(() => {
//   router.forward();
// }, 5000);


// router
//   .use('/', Button)

export {
  router,
};

