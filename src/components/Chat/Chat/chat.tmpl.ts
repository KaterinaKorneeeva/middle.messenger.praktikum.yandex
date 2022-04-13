export const chatTemplate = `
div.chat-list-item(class=activeChatId)  
    .chat-list-item__container
        .chat-list-item__message-container
            .chat-list-item__image
            .chat-list-item__message-info
                p.chat-list-item__user-name !{title}
                p.chat-list-item__message !{lastMessage}
        .chat-list-item__info-container
            p.chat-list-item__message-date !{chatDate}
            div.chat-list-item__count !{unread_count}
`
