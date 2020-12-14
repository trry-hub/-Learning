/*
 * @Author: trry
 * @Date: 2020-10-22 23:05:06
 * @LastEditors: trry
 * @LastEditTime: 2020-11-09 13:48:10
 * @Description: file content
 */
import { createApp, defineComponent } from 'vue'
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
    defineComponent,
    Vant
}