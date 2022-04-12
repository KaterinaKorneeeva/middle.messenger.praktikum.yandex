import { compile } from 'pug'
import Block from '../../../utils/Block'
import { Error } from '../../../components/Error'
import {errorTemplate} from '../error.tmpl'
import Link from '../../../components/Link'
import {Path} from "../../../constants/router"
import {router} from '../../../index'
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
  }

  onClick() {
    router.go(Path.Chat)
  }
  render() {
    const { content } = this.props
    return this.compile(compile(errorTemplate), { content })
  }
}

