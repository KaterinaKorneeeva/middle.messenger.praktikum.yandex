import Block from '../../utils/Block';
import template from './login.pug'
import Button from "../../components/Button";
import '../../sass/main.scss'
// interface ButtonProps {
//   label: string;
//   events?: {
//       onClick?: () => void;
// }
// }
export class LoginPage extends Block {
  constructor() {
        super({
            label: 'Test',
            button:  new Button({
              label: 'Click Test',
              events : {
                click: () => console.log('clicked')
              }
            })
})
  }

  protected initChildren() {
    console.log('11111', this.props.button);
    this.children.button = this.props.button;
  }


  render() {
    console.log('11111', this.props.button);
    console.log('this.children.button111', this.children.button );
    // return this.compile(template);
    // return this.compile(template, { ...this.props });
    return this.compile(template, this.children.button )
  }
}
