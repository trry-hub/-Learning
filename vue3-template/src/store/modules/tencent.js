/**
 * 存放全局公用状态
 */
import settings from '@/settings'

const state = () => ({
  ...settings,
  captchaAppId: '2065962030' // 腾讯云验证码appid
})

const getters = {}

const actions = {}

const mutations = {

}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
