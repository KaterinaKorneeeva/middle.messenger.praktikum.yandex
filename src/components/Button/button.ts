import Block from '../../utils/Block';
import template from '../Button/buton.pug';


interface ButtonProps {
    label: string;
    events?: {
        onClick?: () => void;
  }
  
}

export class Button extends Block {
//   constructor({label, onClick}: ButtonProps) {
//     // Создаём враппер дом-элемент button
//     super({label, events: {click: onClick}});
   
//   }

  constructor(props: ButtonProps) {
    // Создаём враппер дом-элемент button
    super(props);
   
  }

  render() {
    // language=hbs
    // return `<button type="button">{{text}}</button>`
    return this.compile(template, { ...this.props })
    // return this.compile(template, { ...this.props })
    // return `<button type="button">${this.props.label}</button>`
  }
}
