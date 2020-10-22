import axios, { AxiosRequestConfig, Method } from 'axios'
import qs from 'qs'
import router from '../router/index'
import store from '../store/index'
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

export type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

export interface AxiosRequest {
    baseURL?: string;
    url: string;
    data?: any;
    params?: any;
    method?: Method;
    headers?: any;
    timeout?: number;
    responseType?: ResponseType
}

// 定义接口
interface PendingType {
    url?: string;
    method?: Method;
    params: any;
    data: any;
    cancel: Function;
}

// 取消重复请求
const pending: Array<PendingType> = []
const CancelToken = axios.CancelToken

const instance = axios.create({
    baseURL: process.env.NODE_ENV !== 'development' && process.env.VUE_APP_instance_ROOT,
    timeout: 10000,
    responseType: 'json'
})
// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
    for (const key in pending) {
        const item: number = +key
        const list: PendingType = pending[key]
        // 当前请求在数组中存在时执行函数体
        if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
            // 执行取消操作
            list.cancel('操作太频繁，请稍后再试')
            // 从数组中移除记录
            pending.splice(item, 1)
        }
    }
}
// 添加请求拦截器
instance.interceptors.request.use(
    request => {
        removePending(request)
        if (request.method == 'post') {
            if (request.data instanceof FormData) {
                // 如果是 FormData 类型（上传图片）
                console.log(store.state)

                // request.data.append('token', store.state.token.token)
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
    }, (error: object) => {
        return Promise.reject(error)
    }
)

export { instance, axios }