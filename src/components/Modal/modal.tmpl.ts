export const modalTemplate = `
div(id=modalId).modal
    .modal__container
        h3.modal__title !{modalTitle}
        form.form(name="")
          .form__container
            | !{content}
            div !{button}
              .small.modal__error-text.error #{modalErrorText}
`
