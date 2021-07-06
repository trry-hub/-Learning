import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import '../config/element-variables.scss'
Vue.use(ElementUI)

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

import { axios, api } from '@/api'
Vue.prototype.axios = axios
Vue.prototype.$get = api.get
Vue.prototype.$post = api.post

// 全局组件自动注册
import '@/components/autoRegister'
// 自动加载 svg 图标
const req = require.context('./assets/icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

import './assets/styles/reset.scss'

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
