import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import store from './store'
app.use(store)

import router from './router'
app.use(router)

// 注册 element-plus icons
import * as ElementPlusIcons from '@element-plus/icons'
for (let key in ElementPlusIcons) {
    app.component(key, ElementPlusIcons[key])
}

import '@/assets/styles/element-theme.scss'
import ElementPlus from 'element-plus'
app.use(ElementPlus)
// element 全局配置 按需引入
// app.config.globalProperties.$ELEMENT = {
//   size: store.state.settings.elementSize
// }
// element 指令
// elemetPlusDirectives(app)

// 自定义指令
import directive from '@/util/directive'
// 自定义指令
directive(app)

// 全局变量（$api、$dayjs ...）
import globalProperties from '@/util/global.properties'
globalProperties(app)

// 加载 svg 图标
import 'virtual:svg-icons-register'

// 全局样式
import '@/assets/styles/globals.scss'

app.mount('#app')
