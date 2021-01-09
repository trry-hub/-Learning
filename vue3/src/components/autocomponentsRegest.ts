import {app} from '@/import'

// 全局组件自动注册
const componentsContext = require.context('@/components', true, /index.(vue|ts)$/)
componentsContext.keys().forEach(component => {
    // 组件配置信息
    const componentConfig = componentsContext(component).default
    if (/.vue$/.test(component)) {
        app.component(componentConfig.name, componentConfig)
    } else {
        // app.use(componentConfig)
    }
})