import LoginPage from './pages/Login'
import ChatPage from './pages/Chat'
import ProfilePage from './pages/Profile'
import SignUpPage from './pages/SignUp'
import Error404 from "./pages/Errors/404";
import Error500 from "./pages/Errors/500";
import { Router } from './utils/Router';
import { Path } from "./constants/router";
import AuthController from './controllers/AuthController'
import './sass/main.scss'

const router = new Router('#app')

document.addEventListener('DOMContentLoaded', async () => {
  router
    .use('/', LoginPage)
    .use(Path.SignUp, SignUpPage)
    .use(Path.Profile, ProfilePage)
    .use(Path.Chat, ChatPage)
    .use(Path.Error404, Error404)
    .use(Path.Error500, Error500)

    // .use('/', LoginPage)
    // .use('/sign-up', Registration)
    // .use('/settings', Settings)
    // .use('/settings/user', SettingsUser)
    // .use('/settings/password', SettingsPassword)
    // .use('/messenger', Chat)
    // .use('/500', Error500)
    // .use('/404', Error404);

    // await AuthController.fetchUser();
    try {
      await AuthController.fetchUser()
    } catch (e) {
      console.log('eeee',e);
      router.go('/');
    }


  router.start();
});


// export {
//   router
// };

