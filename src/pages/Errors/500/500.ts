import Block from '../../../utils/Block';
import { Error } from '../../../components/Error'
import template from '../template.pug'
import { renderDOM } from "../../../utils/renderDOM";
import '../../../sass/main.scss'
export class Error500 extends Block {
    constructor() {
        super({
            content: new Error({
                errorTitle: 'Ошибка 500',
                errorSubTitle: 'Мы уже фиксим',
                errorBtnText: 'Назад к чатам',
                errorNavPath: '/chat.html'
            }),
        })
    }

    render() {
        const { content } = this.props
        return this.compile(template, {  content })
    }
}

const ErrorPage = new Error500();
renderDOM(".page", ErrorPage);
