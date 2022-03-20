import ProfilePage from './profile'
import { withStore } from '../../utils/Store'

export const withUser = withStore((state: any) => ({...state.currentUser}))

export default withUser(ProfilePage)
 