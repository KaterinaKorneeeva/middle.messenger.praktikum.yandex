import { compile } from 'pug'
import Block from '../../utils/Block'
import {ProfileImageTemplate} from './profileImage.tmpl'

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
    return this.compile(compile(ProfileImageTemplate), { ...this.props })
  }
}
