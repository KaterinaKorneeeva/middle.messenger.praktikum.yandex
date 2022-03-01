import SignUpPage from "./pages/SignUp";
import { renderDOM } from "./utils/renderDOM";
import './sass/main.scss'

document.addEventListener('DOMContentLoaded', () => {
    const signUpPage = new SignUpPage();
    renderDOM("#app", signUpPage);
})
