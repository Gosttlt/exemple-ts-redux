import {userReducer} from './reducers/user/userReducer'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
