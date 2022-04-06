import MessageList from './MessageList'
import { withStore } from '../../../utils/Store'

export const withMessageList = withStore((state: any) => ({ ...state.activeChatMessages }))

export default withMessageList(MessageList)
