import { deepClone } from '@/utils'

const state = {
    routes: []
}
const mutations = {
    // 设置 routes 列表
    SETROUTES: (state, routes) => {
        routes.some(item => {
            if (item.path === '/') {
                state.routes = deepClone(item.children)
                return false
            }
        })
        console.log(state.routes)
    }
}
const actions = {}
const getters = {
    GETROUTES: state => {
        return state.routes
    }
}
export default {
    namespaced: true, // 开启命名空间
    state,
    mutations,
    actions,
    getters
}
