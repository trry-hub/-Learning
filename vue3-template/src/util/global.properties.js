import api from '@/api'
import { auth, authAll } from '@/util'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Cookies from 'js-cookie'
import hotkeys from 'hotkeys-js'
import mitt from 'mitt'
import { ElMessage } from 'element-plus'

const eventBus = mitt()
export default function globalProperties(app) {
    // 请求
    app.config.globalProperties.$api = api
    // 鉴权
    app.config.globalProperties.$auth = auth
    app.config.globalProperties.$authAll = authAll
    dayjs.locale('zh-cn')
    app.config.globalProperties.$dayjs = dayjs
    app.config.globalProperties.$cookies = Cookies
    app.config.globalProperties.$hotkeys = hotkeys
    app.config.globalProperties.$eventBus = eventBus
    app.config.globalProperties.$message = ElMessage
}

export const globalvariable = {
    $api: api,
    $auth: auth,
    $authAll: authAll,
    $dayjs: dayjs,
    $cookies: Cookies,
    $hotkeys: hotkeys,
    $eventBus: eventBus,
    $message: ElMessage
}
