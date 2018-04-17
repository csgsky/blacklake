import * as actionConst from './const'

export function login(payload) {
  return {
    type: actionConst.ACTION_LOGIN,
    payload
  }
}

export function loginSuccess(payload) {
  return {
    type: actionConst.ACTION_SUCEESS,
    payload
  }
}
