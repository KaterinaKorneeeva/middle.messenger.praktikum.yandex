export const chatTemplate = `
main
  .chat-container 
      .chat-list
          .chat-list__container !{link} 
              | !{createChat} 
              | !{chatList}
      .chat-area
        | !{chatHeader}
        | !{messageList}
        | !{inputMessage}
`