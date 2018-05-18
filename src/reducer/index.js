import { combineReducers } from 'redux'
import login from './loginReducer'
import project from './projectReducer'

export default combineReducers({
  login,
  project
})
