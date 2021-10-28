import axios from 'axios'
import qs from 'qs'
// import router from '@/router/index'
import store from '@/redux/store'
import { message } from 'antd'


const MODE = import.meta.env // 环境变量
const api = axios.create({
    baseURL: MODE.VITE_APP_API_ROOT,
    timeout: 10000,
    responseType: 'json'
    // withCredentials: true
})

console.log(MODE);


// 设置全局的请求次数，请求的间隙
// api.defaults.retry = 4
// api.defaults.retryDelay = 1000

api.interceptors.request.use(
    request => {
        request.retry = 1
        request.retryDelay = 1000

        if (request.method === 'post') {
            // if (request.data instanceof FormData) {
            //     if (store.getters['token/isLogin']) {
            //         // 如果是 FormData 类型（上传图片）
            //         request.data.append(
            //             'token',
            //             store.state.token.info.token
            //         )
            //     }
            // } else {
            //     // 带上 token
            //     if (request.data === undefined) {
            //         request.data = {}
            //     }
            //     if (store.getters['token/isLogin']) {
            //         request.data.token = store.state.token.info.token
            //     }
            //     request.data = qs.stringify(request.data)
            // }
        } else {
            // 带上 token
            if (request.params === undefined) {
                request.params = {}
            }
            if (store.getters['token/isLogin']) {
                request.params.token = store.state.token.info.token
            }
        }

        // 处理上传接口的请求时长
        if (request.url === 'upload/upload') {
            request.timeout = 0
        }
        return request
    }
)

api.interceptors.response.use(
    response => {
        // if (response.data.error !== '') {
        //     // 如果接口请求时发现 token 失效，则立马跳转到登录页
        //     if (response.data.status === 0) {
        //         // toLogin()
        //         store.dispatch('token/logout')
        //         return false
        //     }
        //     if (store.state.settings.mode === 'pc') {
        //         message({
        //             type: 'error',
        //             message: response.data.error
        //         })
        //     }
        //     return Promise.reject(response.data)
        // }

        if(response.code === 0) {
          message.error(response.msg)
        }
        return Promise.resolve(response.data)
    },
    error => {
        let { config } = error

        // 如果config不存在或没有设置重试选项，则拒绝
        if (!config || !config.retry) return Promise.reject(error)

        // 设置用于跟踪重试计数的变量
        config.__retryCount = config.__retryCount || 0

        // 检查重试次数是否达到最大值
        if (config.__retryCount >= config.retry) {
            // 有错误拒绝
            return Promise.reject(error)
        }

        // 增加重试次数
        config.__retryCount += 1

        // Create new promise to handle exponential backoff
        var backoff = new Promise(function(resolve) {
            setTimeout(function() {
                resolve()
            }, config.retryDelay || 1)
        })

        // 返回调用axios以重试请求的承诺
        return backoff.then(function() {
            return api(config)
        })
    }
)

export {
    api,
    axios
}
