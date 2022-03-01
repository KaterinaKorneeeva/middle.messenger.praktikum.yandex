import Error404 from "./pages/Errors/404";
import  {renderDOM}  from "./utils/renderDOM";
import './sass/main.scss'

document.addEventListener('DOMContentLoaded', () => {
  const errorPage = new Error404();
  
  renderDOM("#app", errorPage);
})
