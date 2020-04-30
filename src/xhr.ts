import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get', headers = {} } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  /**
   * 选自MDN Ref
   * XMLHttpRequest.setRequestHeader() 是设置HTTP请求头部的方法。
   * 此方法必须在  open() 方法和 send()   之间调用。
   * 如果多次对同一个请求头赋值，只会生成一个合并了多个值的请求头。
   */

  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })

  request.send(data)
}
