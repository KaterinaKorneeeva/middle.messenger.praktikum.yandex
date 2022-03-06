import Block from '../../../utils/block';
import template from './template.pug'

interface ChatProps {
    messageText: string;
    sender: string;
    date: string;
    count: string;
}

export default class Chat extends Block {
    constructor(props: ChatProps) {
        super(props)
    }

    render() {
        return this.compile(template, {  ...this.props  })
    }
}
