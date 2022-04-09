export const loginTemplate = `
main
  .block
    h2.block__title !{label}
    form.form(name="signin")
        .form__container 
            | !{content}
            .form__buttons 
                | !{button}
                | !{linkToSignUp}
`
