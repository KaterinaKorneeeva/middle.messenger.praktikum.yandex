import Block from '../../../utils/Block';
import template from './template.pug';
interface ButtonProps {
  label: string;
  className: string;
  events?: {
    click?: () => void;
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
