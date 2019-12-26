
//export const RECEIVE_USER_IMAGE = 'RECEIVE_USER_IMAGE'
export const RECEIVE_USERS = 'RECEIVE_USERS'

//export function receiveUserImage({ avatarURL }) {
//  type: RECEIVE_USER_IMAGE,
//  avatarURL,
//}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

