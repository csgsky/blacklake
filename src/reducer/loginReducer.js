import * as actionConst from '../action/const'

const initState = {
  username: 'aa',
  password: 'bb'
}

export default function login (state = initState, action = {}) {
  switch (action.type) {
    case actionConst.ACTION_SUCEESS:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password
      }
    default:
      return state
  }
}
