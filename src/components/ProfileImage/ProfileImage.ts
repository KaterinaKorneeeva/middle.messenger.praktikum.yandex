import Block from '../../utils/Block'
import template from './template.pug'

interface ProfileImageProps {
  events?: {
    click?: () => void
  }
}
export default class ProfileImage extends Block {
  constructor(props: ProfileImageProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
