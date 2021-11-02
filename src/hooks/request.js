import axios from 'axios-extra'

axios.defaults.maxConcurrent = 5
axios.defaults.queueOptions.retry = 2

let CancelToken = axios.CancelToken
let source = CancelToken.source()

export const cancel = async () => {
  source.cancel()
  CancelToken = axios.CancelToken
  source = CancelToken.source()
}

export default async ({ url, body, method = 'POST' }) =>
  axios({
    url,
    body,
    method,
    cancelToken: source.token
  })
    .then((response) => response)
    .catch((error) => error)

