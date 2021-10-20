import { reactive } from 'vue'
import { courseList } from '@/api/urls'
/**
 * 获取课程列表数据
 * 调用时机：切换tab/搜索时
 * @param {Object} params 请求参数
 * @returns loading、请求返回的列表数据
 */
export default async function useListData(params) {
    const dataMap = reactive({
        loading: false
    })

    /**
     * 请求课程列表
     */
    const res = await courseList(params)
    console.log(res)

    return {
        ...toRefs(dataMap),
        list: res.data
    }
}
