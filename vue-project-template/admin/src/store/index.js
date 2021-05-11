import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 自动导入store模块
const modulesStore = require.context('./module/', true, /.js$/),
    reg = /(.*\/)*([^.]+).*/gi,
    modules = {}

modulesStore.keys().forEach(item => {
    const name = item.replace(reg, '$2')
    modules[name] = modulesStore(item).default
})

export default new Vuex.Store({
    namespaced: true, // 开启命名空间
    strict: process.env.NODE_ENV !== 'production',
    modules
})
