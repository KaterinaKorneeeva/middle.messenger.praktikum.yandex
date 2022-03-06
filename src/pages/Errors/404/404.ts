import Block from '../../../utils/Block';
import { Error } from '../../../components/Error'
import template from '../template.pug'
import { renderDOM } from "../../../utils/renderDOM";
import '../../../sass/main.scss'
export class Error404 extends Block {
    constructor() {
        super({
            content: new Error({
                errorTitle: 'Ошибка 404',
                errorSubTitle: 'Не туда попали',
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

const ErrorPage = new Error404();
renderDOM(".page", ErrorPage);
