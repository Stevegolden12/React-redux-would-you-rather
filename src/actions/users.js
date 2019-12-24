export const RECEIVE_USER_IMAGE = 'RECEIVE_USER_IMAGE'

export function receiveUserImage({ avatarURL }) {
  type: RECEIVE_USER_IMAGE,
  avatarURL,
}