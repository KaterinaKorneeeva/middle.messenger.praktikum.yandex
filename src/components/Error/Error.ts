import Block from '../../utils/block';
import template from './template.pug'

export default class Error extends Block {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const {
            errorTitle, errorSubTitle, navigateText,
        } = this.props

       

        return this.compile(template, {
            errorTitle, errorSubTitle, navigateText,
        })
    }
}
