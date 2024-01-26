import axios, { type Axios, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { getBaseUrl } from '@/utils'

const request: Axios = axios.create({
  baseURL: getBaseUrl(),
  timeout: 1000 * 5
})

// 请求拦截
request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config
})

// 响应拦截
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: Error) => {
    console.log(error)
  }
)

export default request
