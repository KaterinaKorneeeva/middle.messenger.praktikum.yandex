import Block from '../../utils/Block';
import template from './input.pug';

interface InputProps {
    inputName: string;
    labelName: string;
    id: string;
    errorText: string;
    type: string;
    placeholder: string;

//     events?: {
//         onClick?: () => void;
//   }
}
class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
export default Input;
