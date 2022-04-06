import ProfileImage from './ProfileImage'
import { withStore } from '../../utils/Store'

export const withUser = withStore((state: any) => ({ ...state.currentUser }))

export default withUser(ProfileImage)
