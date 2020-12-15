/*
 * @Author: trry
 * @Date: 2020-10-15 10:12:22
 * @LastEditors: trry
 * @LastEditTime: 2020-11-09 15:08:11
 * @Description: file content
 */
import { app, router, Vant } from './import'

// 初始化rem
import '@/utils/rem'

// 自动注册全局组件
import '@/components/autocomponentsRegest'

import '@/log'

import { instance, axios } from './api/index'

app.config.globalProperties.$api = instance
app.config.globalProperties.$axios = axios

app.use(Vant).use(router).mount('#app')
