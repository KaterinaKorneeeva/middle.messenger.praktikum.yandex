import Block from '../../utils/block';
import template from './template.pug'

interface ErrorProps {
    errorTitle: string;
    errorSubTitle: string;
    errorBtnText: string;
}

export default class Error extends Block {
    constructor(props: ErrorProps) {
        super(props)
    }

    render() {
        const { errorTitle, errorSubTitle, errorBtnText } = this.props

        return this.compile(template, {
            errorTitle, errorSubTitle, errorBtnText,
        })
    }
}
