import Block from '../../utils/Block';
import template from './modal.pug';
interface ButtonProps {
    label: string;
    events?: {
        onClick?: () => void;
  }
}
class Modal extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
export default Modal;
