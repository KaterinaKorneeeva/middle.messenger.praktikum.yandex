import Block from '../../../utils/Block';
import template from './button.pug';
interface ButtonProps {
    label: string;
    events?: {
        onClick?: () => void;
  }
}
class ButtonSettings extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
export default ButtonSettings;
