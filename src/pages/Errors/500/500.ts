import Block from '../../../utils/block';
import { Error } from '../../../components/Error'
import template from '../template.pug'

export class Error500 extends Block {
    constructor() {
        super({
            content: new Error({
                errorTitle: 'Ошибка 500',
                errorSubTitle: 'Мы уже фиксим',
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
