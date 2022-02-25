import Block from '../../../utils/block';
import { Error } from '../../../components/Error'

import template  from './template.pug'

export default class Error404 extends Block {
    constructor() {
        
        super({
            content: new Error({
                errorTitle: '404',
                errorSubTitle: 'Такой страницы нет :(',
                errorBtnText: 'Назад к чатам',
                // navigatePath: 'index.html',
            }),
        }, 'div', '#app')
    }

    render() {
        const { content } = this.props
       
        return this.compile(template, {  content })
    }
}
