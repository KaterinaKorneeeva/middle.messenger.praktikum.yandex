import ChatHeader from './ChatHeader'
import { withStore } from '../../../utils/Store'

export const withActiveChats = withStore((state: any) => ({ ...state.activeChat }))

export default withActiveChats(ChatHeader)
