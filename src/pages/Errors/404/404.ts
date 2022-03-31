import Block from '../../../utils/Block'
import { Error } from '../../../components/Error'
import template from '../template.pug'
import { Router } from '../../../utils/Router'
import Link from '../../../components/Link'
import {Path} from '../../../constants/router'

import '../../../sass/main.scss'
export class Error404 extends Block {
  constructor() {
    super({
      content: new Error({
        errorTitle: 'Ошибка 404',
        errorSubTitle: 'Не туда попали',
        errorBtnText: 'Назад к чатам',
        errorNavPath: '/chat.html',
        link: new Link ({
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
    return this.compile(template, { content })
  }
}
