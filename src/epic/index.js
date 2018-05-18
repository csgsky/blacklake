import {combineEpics} from 'redux-observable'

import loginEpic from './loginEpic'
import projectEpic from './projectEpic'

export default combineEpics(
  loginEpic,
  projectEpic
)
