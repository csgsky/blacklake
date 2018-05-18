import * as actionConst from './const'

export function getProjects({page, isRefreshing}) {
  return {
    type: actionConst.ACTION_GET_PROJECTS,
    payload: {
      page,
      isRefreshing
    }
  }
}

export function getProjectsSuccess({data}) {
  return {
    type: actionConst.ACTION_GET_PROJECT_SUCEESS,
    payload: data
  }
}
