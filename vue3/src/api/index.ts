import axios from 'axios'
import qs from 'qs'
import router from '../router/index'
import { Toast } from 'vant'

/**
 * 跳转登录页
 * 携带当前页面路由，以及在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.push({
        path: '/login',
        query: {
            // redirect: router.currentRoute.fullPath
        }
    })
}

const instance = axios.create({
    baseURL: process.env.NODE_ENV !== 'development' && process.env.VUE_APP_instance_ROOT,
    timeout: 10000,
    responseType: 'json'
})

// 添加请求拦截器
instance.interceptors.request.use(
    request => {
        if (request.method == 'post') {
            if (request.data instanceof FormData) {
                // 如果是 FormData 类型（上传图片）
                
                request.data.append('token', '')
            } else {
                // 带上 token
                if (request.data == undefined) {
                    request.data = {}
                }
                request.data = qs.stringify(request.data)
            }
        } else {
            // 带上 token
            if (request.params == undefined) {
                request.params = {}
            }
        }
        return request
    }
)

instance.interceptors.response.use(
    response => {
        if (response.data.error != '') {
            // 如果接口请求时发现 token 失效，则立马跳转到登录页
            if (response.data.status == 0) {
                toLogin()
                return false
            }
            Toast.fail(response.data.error)
            return Promise.reject(response.data)
        }
        Promise.resolve(response.data)
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export { instance, axios }