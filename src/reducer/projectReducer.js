import * as actionConst from '../action/const'


const initState = {
  projects: [],
  isRefreshing: true,
  page: 1,
  hasMore: false
}

export default function login (state = initState, action = {}) {
  switch (action.type) {
    case actionConst.ACTION_GET_PROJECTS:
      return {
        ...state,
        isRefreshing: true,
        page: 1
      }
    case actionConst.ACTION_GET_PROJECT_SUCEESS:
      return {
        ...state,
        projects: action.payload.data,
        hasMore: action.payload.data.length >= 20,
        isRefreshing: false,
        page: state.page + 1
      }
    default:
      return state
  }
}
