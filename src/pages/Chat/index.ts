import ChatPage from './chat'
import { withStore } from '../../utils/Store'

const withChats = withStore(state => ({ chats: [...(state.chats || [])] }))
export default withChats(ChatPage)
