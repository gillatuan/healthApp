import axios, { CancelToken } from 'axios'

import { EHttpMethods, FullResponse, TPropsApi } from 'services/api/api.d'

let token = ''
if (process.env.NODE_ENV === 'production') {
  const getWindow: any = (window as any).window
  token = getWindow.currentUser.token
}

const Request = async (
  methodHttp: EHttpMethods,
  baseUrl: string,
  endpoint: string,
  body: any,
  cancelToken: CancelToken,
): Promise<FullResponse<any> | any> => {
  try {
    const res = await axios({
      url: endpoint,
      baseURL: `${baseUrl}?access_token=${token}`,
      method: methodHttp,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      data: JSON.stringify(body),
      cancelToken,
    })
    if (res.status === 401) {
      return res
    }
    return res.data
  } catch (err: any) {
    return err.response.data
  }
}
const RequestHeader: any = async (
  methodHttp: EHttpMethods,
  baseUrl: string,
  endpoint: string,
  body: any,
  cancelToken: CancelToken,
  isUpload?: boolean,
): Promise<FullResponse<any> | any> => {
  let headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  }
  let data = JSON.stringify(body)
  if (isUpload) {
    data = body
    headers = {
      ...headers,
      'Content-Type': 'multipart/form-data',
    }
  }

  try {
    const res = await axios({
      url: endpoint,
      baseURL: baseUrl,
      method: methodHttp,
      headers,
      data,
      cancelToken,
    })
    if (res.status === 401) {
      return res
    }
    return res.data
  } catch (err: any) {
    return err.response.data
  }
}

export const get: any = (props: TPropsApi) => {
  const { cancelToken, embbedHeader, endpoint, payload, url } = props
  if (embbedHeader) {
    return RequestHeader('GET', url, endpoint, payload, cancelToken)
  }

  return Request('GET', url, endpoint, payload, cancelToken)
}

export const post: any = (props: TPropsApi) => {
  const { cancelToken, embbedHeader, endpoint, isUpload, payload, url } = props

  if (embbedHeader) {
    return RequestHeader('POST', url, endpoint, payload, cancelToken, isUpload)
  }

  return Request('POST', url, endpoint, payload, cancelToken)
}

export const put: any = (props: TPropsApi) => {
  const { cancelToken, embbedHeader, endpoint, payload, url } = props
  if (embbedHeader) {
    return RequestHeader('PUT', url, endpoint, payload, cancelToken)
  }

  return Request('PUT', url, endpoint, payload, cancelToken)
}

export const patch: any = (props: TPropsApi) => {
  const { cancelToken, embbedHeader, endpoint, payload, url } = props
  if (embbedHeader) {
    return RequestHeader('PATCH', url, endpoint, payload, cancelToken)
  }

  return Request('PATCH', url, endpoint, payload, cancelToken)
}

export const deleteRequest: any = (props: TPropsApi) => {
  const { cancelToken, embbedHeader, endpoint, payload, url } = props
  if (embbedHeader) {
    return RequestHeader('DELETE', url, endpoint, payload, cancelToken)
  }

  return Request('DELETE', url, endpoint, payload, cancelToken)
}
