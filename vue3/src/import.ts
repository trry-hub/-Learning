import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入Vant 组件
import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

export {
    createApp,
    App,
    router,
    app,
    Vant
}