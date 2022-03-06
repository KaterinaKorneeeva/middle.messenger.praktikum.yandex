import Block from '../../utils/Block';
import template from './template.pug';
import { VALIDATOR } from '../../utils/const'

interface InputProps {
  inputName: string;
  inputValue?: string;
  labelName?: string;
  id: string;
  errorText: string;
  type: string;
  placeholder?: string;
  required?:  boolean;
}
class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        focusout: (e: Event) => this.handleBlur(e),
      },
    });
  }

  onValid(name: string, value: FormDataEntryValue | null): { isValid: boolean, errorText: string } | void {
    return VALIDATOR[`${name}`]?.(value)
  }

  onUpdate(name: string, value: FormDataEntryValue | null) {
    const { isValid = true, errorText = '' } = this.onValid(name, value) || {}
    this.setProps({
      ...this.props,
      inputValue: value,
      isValid,
      errorText,
      labelName: name,
    })
  }

  handleBlur(e: FocusEvent) {
    const { name, value } = (<HTMLInputElement>e.target)
    this.onUpdate(name, value)
  }


  render() {
    return this.compile(template, { ...this.props });
  }
}
export default Input;

