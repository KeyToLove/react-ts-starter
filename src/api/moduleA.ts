import request from './request'

export const testApi = () => {
  return request.get('/test')
}
