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
