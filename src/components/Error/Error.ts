import { compile } from 'pug'
import Block from '../../utils/Block'
import {errorTemplate} from './error.tmpl'

export default class Error extends Block {
  constructor(props: any) {
    super(props)
  }

  render() {
    return this.compile(compile(errorTemplate), { ...this.props })
  }
}
