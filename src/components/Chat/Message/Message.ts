import Block from '../../../utils/block';
import template from './template.pug'

interface MessageProps {
    errorTitle: string;
    errorSubTitle: string;
    errorBtnText: string;
    errorNavPath: string;
}

export default class Error extends Block {
    constructor(props: MessageProps) {
        super(props)
    }

    render() {
        return this.compile(template, {  ...this.props  })
    }
}
