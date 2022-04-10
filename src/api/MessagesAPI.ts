import { APIRoute } from '../../src/utils/const'

export type MessageFormData = {
  data?: string,
  content?: string,
  type?: string
}

export type MessagesAPIData = {
  userId: number,
  chatId: number,
  token: string,
  callback: {
    onOpen: () => void
    onClose: (event: CloseEvent) => void
    onMessage: (event: MessageEvent) => void
  }
}

export default class MessagesAPI {
  protected socket: WebSocket

  constructor(props: MessagesAPIData) {
    const { userId, chatId, token, callback } = props

    this.socket = new WebSocket(`${APIRoute.WSS}/${userId}/${chatId}/${token}`)
    this.registerEvents(callback)
  }

  private registerEvents(events: MessagesAPIData['callback']) {
    this.socket.addEventListener('open', events.onOpen)
    this.socket.addEventListener('close', events.onClose)
    this.socket.addEventListener('message', events.onMessage)
  }

  private _send(data: MessageFormData) {
    return this.socket.send(JSON.stringify(data))
  }

  public send({ type, content }: MessageFormData) {
    return this._send({ content, type })
  }

  public close() {
    return this.socket.close()
  }
}
