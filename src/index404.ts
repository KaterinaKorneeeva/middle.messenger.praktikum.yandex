import Error404 from "./pages/Errors/404";
import  {renderDOM}  from "./utils/renderDOM";
import './sass/main.scss'
import { Error } from './components/Error'

document.addEventListener('DOMContentLoaded', () => {

const errorPage = new Error404();

// const error = new Error({
//   errorTitle: 'Ошибка 404',
//   errorSubTitle: 'Не туда попали',
//   errorBtnText: 'Назад к чатам',
// });

  renderDOM("#app", errorPage);
  // renderDOM("#app", error);

})
