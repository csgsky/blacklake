
const dev = 'https://api2-dev.blacklake.cn'
const test = 'https://api2-test.blacklake.cn'
const staging = 'https://api2-staging.blacklake.cn'
const product = 'https://api2-product.blacklake.cn'

const baseUrlWithoutToken = path => test + path


const contentType = 'application/json;charset=UTF-8'

function restApi ({method, path, token, params}) {
  let url = baseUrlWithoutToken(path)
  if (params) {
    const paramsArray = []
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return fetch(url, {
    method: method || 'GET',
    headers: {
      'X-CLIENT-VERSION': '2.10',
      'X-CLIENT': 'native',
      'Content-Type': contentType,
      'X-AUTH': token
    }
  }).then(response =>
    response.json()
  ).then(responseJson =>
    responseJson
  ).catch(error =>
    error
  )
}

export default restApi

