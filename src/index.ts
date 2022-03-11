import LoginPage from "./pages/Login";
import { renderDOM } from "./utils/renderDOM";
import './sass/main.scss'


document.addEventListener('DOMContentLoaded', () => {

    const loginPage = new LoginPage();

    renderDOM("#app", loginPage);
})
