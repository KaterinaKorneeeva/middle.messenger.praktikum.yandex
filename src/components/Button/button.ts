import Block from '../../utils/Block';
import template from './button.pug';
interface ButtonProps {
    label: string;
    events?: {
        onClick?: () => void;
  }
}
class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    // return `<div>${this.props.label}</div>`;
    return this.compile(template, { ...this.props });
    // return this.compile(template, { whom: 'Worldsss' });
  }
}
export default Button;
