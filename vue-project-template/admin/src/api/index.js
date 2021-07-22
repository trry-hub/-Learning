import axios from 'axios' // 文档地址 http://axios-js.com/zh-cn/docs/index.html
import qs from 'qs'

import router from '@/router/index'
import store from '@/store/index'
import { Message } from 'element-ui'

/**
 * 跳转登录页的方法
 */
const toLogin = () => {
    router.push({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    })
}

// axios实例化
const api = axios.create({
    baseURL: process.env.VUE_APP_API_ROOT,
    timeout: 10000,
    responseType: 'json'
    // withCredentials: true
})

// 请求拦截器
api.interceptors.request.use(
    config => {
        store.commit['user/token'] = '这个是token'
        config.headers.common['token'] = store.user?.token || ''
        if (config.method === 'get') {
            config.params = qs.stringify(config.data)
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
api.interceptors.response.use(
    response => {
        if (response.code === 404) {
            console.log('接口404了')
        } else if (response.code === -1) {
            // token过期，需要重新登录
            toLogin()
        }
        return response.data
    },
    error => {
        Message({
            type: 'error',
            message: error.message
        })
        return Promise.reject(error)
    }
)

export { axios, api }
