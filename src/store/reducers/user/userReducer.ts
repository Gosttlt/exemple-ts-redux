import UsersModels from '../../../models/users'
import ActionsUserType from './actions'
import UserActEnum from './const'

interface IUserState {
  users: UsersModels[]
  loading: boolean
  error: null | string[]
}

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
}

export const userReducer = (
  state = initialState,
  action: ActionsUserType,
): IUserState => {
  switch (action.type) {
    case UserActEnum.FETCH_USERS:
      return {...state, loading: true}

    case UserActEnum.FETCH_SUCCES:
      return {loading: false, error: null, users: action.payload}

    case UserActEnum.FETCH_ERROR:
      return {loading: false, error: action.payload, users: []}

    default:
      return state
  }
}
