export const messageFormTemplate = `
.chat-area__main
  .chat-area__container
    | !{messageList}
  .chat-area__footer
    form.chat-message-form(name="message")
        .chat-message-form__btn-attach
        | !{inputMessage}
        button.button.button--arrow-forward
`
