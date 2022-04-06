import { APIRoute } from './const'

export function resolveAvatarSrc(path?: string): string | undefined {
  return path ? `${APIRoute.RESOURCES}${path}` : undefined
}

export const adaptUsersData = (user:Array<{}>) => {
  return Object.assign({}, user, {
    avatar: resolveAvatarSrc(user.avatar),
  })
}

export const adaptChatData = (chat:Array<{}>, activeChatId: number) => {
  return Object.assign({}, chat, {
    avatar: chat.avatar,
    chatDate: chat.chatDate,
    id: chat.id,
    last_message: chat.last_message,
    title: chat.title,
    unread_count: chat.unread_count,
    activeChatId: chat.id === activeChatId ? 'active' : '' ,
  })
}

export const adaptMessageData = (message: Array<{}>, userId: number) => {
  return Object.assign({}, message, {
    massageText: message.content,
    className: userId === message.user_id ? 'chat-message--sent':'chat-message--incoming'
  })
}

