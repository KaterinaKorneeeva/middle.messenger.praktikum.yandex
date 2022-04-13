import { set, isEqual } from './helpers'
import EventBus from './EventBus'
import Block from './Block'

export enum StoreEvents {
  Updated = 'updated',
}

interface User {
  'id': number
  'first_name': string
  'second_name': string
  'display_name': string
  'login': string
  'email': string
  'phone': string
  'avatar': string
}

interface ActiveChat {
  'userId': number
  'chatid': number
}

interface StoreData {
  currentUser?: User
  chats?: []
  messages?: []
  activeChat?: ActiveChat,
  activeChatMessages?: [],
}
class Store extends EventBus {
  private state: StoreData = {}

  public getState() {
    return this.state
  }

  public set(path: keyof StoreData, value: unknown) {
    set(this.state, path, value)
    this.emit(StoreEvents.Updated)
  }
}

const store = new Store()

export const withStore = (mapStateToProps: (state: StoreData) => Record<string, unknown>) => (Component: typeof Block) => {
  let state: Record<string, unknown>

  return class extends Component {
    constructor(props: any) {
      state = mapStateToProps(store.getState())
      super({ ...props, ...state })
      store.on(StoreEvents.Updated, () => {
        const newState = mapStateToProps(store.getState())
        if (!isEqual(state, newState)) {
          this.setProps({ ...newState })
        }
      })
    }
  }
}

export default store
