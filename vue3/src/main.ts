import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)

// 全局组件自动注册
// import app from "@/components/autocomponentsRegest";

const componentsContext = require.context('@/components', true, /index.(vue|ts)$/)
componentsContext.keys().forEach(component => {
    // 组件配置信息
    const componentConfig = componentsContext(component).default
    if (/.vue$/.test(component)) {
        app.component(componentConfig.name, componentConfig)
    } else {
        app.use(componentConfig)
    }
})

// 引入Vant 组件
import Vant from 'vant'
import 'vant/lib/index.css'

import { instance, axios } from './api/index'

app.config.globalProperties.$api = instance
app.config.globalProperties.$axios = axios

// 初始化rem
import '@/utils/rem'

app.use(Vant).use(store).use(router).mount('#app')
