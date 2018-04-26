import restApi from './baseApi'

const basePath = '/manufacture/v1/project/produce_task'

const produceTaskApi = {
  listTaskByOperator: ({token, params}) => restApi({path: `${basePath}/byOperator`, token, params})
}

export default produceTaskApi
