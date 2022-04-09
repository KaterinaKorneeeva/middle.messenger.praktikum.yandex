export const signupTemplate = `
main
  .block
    h2.block__title !{label}
    form.form(name="signin")
        .form__container !{content}
            .form__buttons !{button} 
              | !{linkToSignIn} 
`
