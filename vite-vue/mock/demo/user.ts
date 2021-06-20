import { MockMethod } from 'vite-plugin-mock'
import { successFn } from '../_utils'

const userInfo = {
  name: 'xkrumeng',
  email: '1827654507@qq.com',
  title: '前端开发工程师',
  country: '中国',
  address: 'nanchang City Jianxi province',
}

const userMock = [
  {
    url: '/api/user/getUserInfo',
    timeout: 1000,
    method: 'get',
    response: () => {
      return successFn(userInfo)
    },
  },
]

export default userMock as MockMethod[]
