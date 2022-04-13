export const chatHeaderTemplate = `
.chat-area__header
  .chat-list-item__image
  .chat-list-item__message-info
    p.chat-list-item__user-name !{title}
  if title
    div.chat-settings
      div !{addUser}
      div !{deleteUser}
  else
    p выберите чат
`
