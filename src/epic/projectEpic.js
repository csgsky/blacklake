import {Observable} from 'rxjs/Rx'
import * as projectAction from '../action/projectAction'
import * as commonAction from '../action/commonAction'
import * as actionConst from '../action/const'
import {KEY_USER_TOKEN, get} from '../core/Storage'
import projectApi from '../api/projectApi'

function projectListInitEpic(action$) {
  return action$.ofType(actionConst.ACTION_GET_PROJECTS)
      .mergeMap(action =>
          Observable.zip(
              Observable.of(action.payload.page),
              Observable.fromPromise(get({key: KEY_USER_TOKEN})),
              (page, token) => ({page, token})
          ).flatMap(
              it => Observable.from(projectApi.getProjects({token: it.token}))
          ).map((data) => {
            if (data.error) {
              return commonAction.netWorkeFailed({error: data.error})
            }
            return projectAction.getProjectsSuccess({data})
          }
          )
      )
}

export default projectListInitEpic
