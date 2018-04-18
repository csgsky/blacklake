
import { Observable } from 'rxjs/Rx'
import * as actions from '../action/loginAction'
import * as actionConst from '../action/const'

function loginEpic(action$) {
  return action$.ofType(actionConst.ACTION_LOGIN)
      .mergeMap(action =>
        Observable.zip(
          Observable.of(action.payload.username),
          Observable.of(action.payload.password),
          (username, password) => ({username, password})
        ).flatMap(
          it => Observable.of({username: it.username, password: it.password})
        ).map(it => actions.loginSuccess(it))
      )
}

export default loginEpic
