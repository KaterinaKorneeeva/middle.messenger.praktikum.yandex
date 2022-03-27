import Block from '../../utils/Block'
import template from './template.pug'

interface ProfileImageProps {
  avatar?: string
  events?: {
    click?: () => void
  }
}
export default class ProfileImage extends Block {
  constructor(props: ProfileImageProps) {
    super({
      avatar: props.avatar,
      events: props.events,
    })
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
