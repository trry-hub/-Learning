import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import '@/components/autoRegister'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

import { axios, api } from '@/api'

Vue.prototype.$axios = axios
Vue.prototype.$get = api.get
Vue.prototype.$post = api.post

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
