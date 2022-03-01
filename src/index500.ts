import Error500 from "./pages/Errors/500";
import  {renderDOM}  from "./utils/renderDOM";
import './sass/main.scss'

document.addEventListener('DOMContentLoaded', () => {
  const errorPage = new Error500();
  
  renderDOM("#app", errorPage);
})  
