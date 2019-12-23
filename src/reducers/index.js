import { combineReducers } from 'redux'
import authedUser from './AuthedUser'
import users from './users'
import tweets from './tweets'

export default combineReducers({
  authedUser,
  users,
  tweets,
})