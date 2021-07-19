const state = {
    isFullScreen: false
}
const mutations = {
    SETISFULLSCREEN(store, data) {
        store.isFullScreen = data
    }
}
const actions = {}
const getters = {
    GETISFULLSCREEN(store) {
        return store.isFullScreen
    }
}

export default {
    namespaced: true, // 开启命名空间
    state,
    mutations,
    actions,
    getters
}
