import { APIRoute } from './const'

export function resolveAvatarSrc(path?: string): string | undefined {
  return path ? `${APIRoute.RESOURCES}${path}` : undefined
}

export const adaptUsersData = (user) => {
  return Object.assign({}, user, {
    avatar: resolveAvatarSrc(user.avatar),
  })
}
