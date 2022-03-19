import Block from '../../utils/Block'
import template from './template.pug'

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
    return this.compile(template, { ...this.props })
  }
}
