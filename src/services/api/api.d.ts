import { CancelToken } from 'axios'

export interface Response<T> {
  data: T
}

export interface FullResponse<T> {
  code: string
  data: T | any
  message: string | null
  result: boolean
  technicalMessage: string | null
}
export interface ITodoResponse<T> {
  code: string
  data: T | null
  message: string | null
  result: boolean
  validatedMessage: string | null
  additional: T | null
}

export interface CollectionResponse<T> {
  data: T[]
}

export type EHttpMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type TPropsApi = {
  cancelToken?: CancelToken | any
  endpoint: string
  embbedHeader?: boolean
  isUpload?: boolean
  payload?: any
  url: string
}

export type TPERMISSION = {
  code: string
  message: string | null
  status: boolean
}
