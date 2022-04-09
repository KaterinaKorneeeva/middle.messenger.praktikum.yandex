import { compile } from 'pug'
import Block from '../../../utils/Block'
import { Error } from '../../../components/Error'
import {errorTemplate} from '../error.tmpl'
import { Router } from '../../../utils/Router';
import Link from '../../../components/Link'
import {Path} from "../../../constants/router";
import '../../../sass/main.scss'
export class Error500 extends Block {
  constructor() {
    super({
      content: new Error({
        errorTitle: 'Ошибка 500',
        errorSubTitle: 'Мы уже фиксим',
        errorBtnText: 'Назад к чатам',
        errorNavPath: '/chat.html',
        link: new Link({
          label: 'Назад к чатам',
          events: {
            click: () => this.onClick()
          }
        }),
      }),
    })
    this.route = new Router()
  }

  onClick() {
    this.route.go(Path.Chat)
  }
  render() {
    const { content } = this.props
    return this.compile(compile(errorTemplate), { content })
  }
}

