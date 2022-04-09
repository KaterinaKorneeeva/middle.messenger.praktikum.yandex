import { compile } from 'pug'
import Block from '../../utils/Block'
import {errorTemplate} from './error.tmpl'

interface ErrorProps {
  errorTitle: string
  errorSubTitle: string
  errorBtnText: string
  errorNavPath: string
}

export default class Error extends Block {
  constructor(props: ErrorProps) {
    super(props)
  }

  render() {
    return this.compile(compile(errorTemplate), { ...this.props })
  }
}
