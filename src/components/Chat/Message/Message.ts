import Block from '../../../utils/Block';
import template from './template.pug'

interface MessageProps {
    massageText: string;
    className: string;
}

export default class Message extends Block {
    constructor(props: MessageProps) {
        super(props)
    }

    render() {
        return this.compile(template, {  ...this.props  })
    }
}
