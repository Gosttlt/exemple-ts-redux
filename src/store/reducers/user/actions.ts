import UsersModels from '../../../models/users'
import UserActEnum from './const'

interface FetchUserAction {
  type: UserActEnum.FETCH_USERS
  payload: UsersModels
}

interface FetchUserSuccesAction {
  type: UserActEnum.FETCH_SUCCES
  payload: UsersModels[]
}

interface FetchUserErrorAction {
  type: UserActEnum.FETCH_ERROR
  payload: string[]
}

type ActionsUserType =
  | FetchUserAction
  | FetchUserSuccesAction
  | FetchUserErrorAction

export default ActionsUserType
