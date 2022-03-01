import Block from '../../../utils/block';
import { Error } from '../../../components/Error'
import template from '../template.pug'

export class Error404 extends Block {
    constructor() {
        super({
            content: new Error({
                errorTitle: 'Ошибка 404',
                errorSubTitle: 'Не туда попали',
                errorBtnText: 'Назад к чатам',
                errorNavPath: '/index.pug'
            }),
        })
    }

    render() {
        const { content } = this.props
        return this.compile(template, {  content })
    }
}
