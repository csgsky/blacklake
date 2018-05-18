import restApi from './baseApi'

const basePath = '/manufacture/v1/project'

const projectApi = {
  getProjects: ({token, params}) => restApi({path: `${basePath}/list`, token, params})
}
export default projectApi
