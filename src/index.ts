import LoginPage from './pages/Login'
import ChatPage from './pages/Chat'
import ProfilePage from './pages/Profile'
import SignUpPage from './pages/SignUp'
import Error404 from './pages/Errors/404'
import Error500 from './pages/Errors/500'
import { Router } from './utils/Router'
import { Path } from './constants/router'
import AuthController from './controllers/AuthController'
import ChatController from './controllers/ChatController'
import './sass/main.scss'


const router = new Router();
document.addEventListener('DOMContentLoaded', async () => {
  router
    .use('/', LoginPage)
    .use(Path.SignUp, SignUpPage)
    .use(Path.Profile, ProfilePage)
    .use(Path.Chat, ChatPage)
    .use(Path.Error404, Error404)
    .use(Path.Error500, Error500)
  try {
    await AuthController.fetchUser()
    await ChatController.fetchChats()
  } catch (e) {
    console.log(e)
    router.go('/')
  }
  router.start()
});

export {
  router,
};
