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
        label:  'Вход',
      })
}



  // constructor() {
  //   super({
  //       button: new Button({
  //         label: 'Click 11111',
  //         events : {
  //           click: () => console.log('clicked')
  //         }
  //       })

  //   });
  // }

  protected initChildren() {
    this.children.button = new Button ({
          label : 'Вход'
      });
  }


  render() {
    // return this.compile(template);
    return this.compile(template, { ...this.props });
    // return this.compile(template, {
    //   button,
    // })
  }
}
