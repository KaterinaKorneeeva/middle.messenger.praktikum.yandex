import Block from '../../utils/Block';
import '../../sass/main.scss'
import template from './profile.pug'
import { renderDOM } from "../../utils/renderDOM";

export class Profile extends Block {
    constructor() {
        super()
    }

    // protected initChildren() {
    //   console.log('11111', this.props.button);
    //   this.children.button = this.props.button; 
    // }


    render() {
        return this.compile(template, { ...this.props });
    }
}

const profile = new Profile();
renderDOM(".page", profile);


