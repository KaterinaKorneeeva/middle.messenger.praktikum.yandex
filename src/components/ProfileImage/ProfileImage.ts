import Block from '../../utils/Block';
import template from './profileImage.pug';

interface ProfileImageProps {
    events?: {
        onClick?: () => void;
  }
}

export default class ProfileImage extends Block {
    constructor(props: ProfileImageProps) {
        super(props)
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}