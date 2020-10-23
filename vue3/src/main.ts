import { app, router, Vant } from './import'

// 初始化rem
import '@/utils/rem'

// 自动注册全局组件
import '@/components/autocomponentsRegest'

import { instance, axios } from './api/index'

app.config.globalProperties.$api = instance
app.config.globalProperties.$axios = axios

app.use(Vant).use(router).mount('#app')
