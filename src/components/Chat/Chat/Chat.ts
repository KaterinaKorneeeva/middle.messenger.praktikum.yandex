import Block from '../../../utils/block';
import template from './template.pug'

interface ChatProps {
    errorTitle: string;
    errorSubTitle: string;
    errorBtnText: string;
    errorNavPath: string;
}

export default class Chat extends Block {
    constructor(props: ChatProps) {
        super(props)
    }

    render() {
        // const { errorTitle, errorSubTitle, errorBtnText } = this.props

        return this.compile(template, {  ...this.props  })
    }
}
