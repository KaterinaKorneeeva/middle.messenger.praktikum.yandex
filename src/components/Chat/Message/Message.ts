import { compile } from 'pug'
import Block from '../../../utils/Block'
import {messageTemplate} from './message.tmpl'

interface MessageProps {
  massageText: string
  className: string
}

export default class Message extends Block {
  constructor(props: MessageProps) {
    super(props)
  }
  render() {
    return this.compile(compile(messageTemplate), { ...this.props })
  }
}
