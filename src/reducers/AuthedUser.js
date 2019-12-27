import { SET_AUTHED_USER } from '../actions/authUser'

export default function authedUser(state = null, action) {
  switch (action.type) {
    //insert case and default here
    case SET_AUTHED_USER:
      return action.id
    default:
      return state
  }
}