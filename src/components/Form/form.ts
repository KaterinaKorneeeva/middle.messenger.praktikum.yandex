import Block from '../../utils/Block';
import template  from './form.pug'

interface FormProps {
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
class Form extends Block {
  constructor(props: FormProps) {
    super(props);
  }

  // render() {
  //   return this.compile(template, { ...this.props });
  // }

      render() {

        console.log(111,this.props)
        const {
            formName, title, input,  content, buttonText = 'Сохранить', isRenderLink = false, linkTitle, href,
        } = this.props
        console.log('contentcontentcontentcontent',input)
        return this.compile(template, {
            formName, title, input, content, buttonText, isRenderLink, linkTitle, href,
        })
    }
}
export default Form;


// import Block from '../Block'
// import compile from '../../utils/compile'

// import { template } from './template'
// import './styles.css'
// import { Props } from './types'

// type RelatedData = {
//     key: string,
//     value: string
// }

// export default class Form extends Block<Props> {
//     constructor(props: Props) {
//         super(props)
//     }

//     onValid(formData: Record<string, FormDataEntryValue | null>, relatedData?: RelatedData) {
//         let isValidForm = true
//         let relatedValue = ''

//         this.props.content.forEach((item) => {
//             if (item.props.inputName === relatedData?.key) {
//                 relatedValue = relatedData.value
//             }
//             item.onUpdate(item.props.inputName, formData[item.props.inputName], relatedValue)
//             if (!item.props.isValid) {
//                 isValidForm = false
//             }
//         })
//         return isValidForm
//     }

//     render() {
//         const {
//             formName, title, content, buttonText = 'Сохранить', isRenderLink = false, linkTitle, href,
//         } = this.props
//         return compile(template, {
//             formName, title, content, buttonText, isRenderLink, linkTitle, href,
//         })
//     }
// }
