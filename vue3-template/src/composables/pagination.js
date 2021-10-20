import { reactive } from 'vue'
export function usePagination(getDataList) {
    const dataMap = reactive({
        tableData: [],
        loading: false,
        sort: null,
        order: null,
        pagination: {
            pageNo: 1,
            pageSize: 10,
            total: 0,
            sizes: [10, 20, 50, 100],
            layout: '->, total, prev, pager, next, jumper'
            // layout: 'sizes,  ->, total, prev, pager, next, jumper'
        }
    })

    const getParams = (params = {}) => {
        const baseParams = {
            pageSize: dataMap.pagination.pageSize,
            pageNo: dataMap.pagination.pageNo
            // from: (dataMap.pagination.pageNo - 1) * dataMap.pagination.pageSize,
            // limit: dataMap.pagination.pageSize
        }
        if (dataMap.sort && dataMap.order) {
            baseParams.sort = dataMap.sort
            baseParams.order = dataMap.order
        }
        Object.assign(baseParams, params)
        return baseParams
    }
    const onSizeChange = pageSize => {
        dataMap.pagination.pageSize = pageSize
        getDataList()
    }
    const onCurrentChange = pageNo => {
        dataMap.pagination.pageNo = pageNo
        getDataList()
    }
    const onSortChange = params => {
        if (params.order) {
            dataMap.sort = params.prop
            dataMap.order = params.order === 'ascending' ? 'asc' : 'desc'
        } else {
            dataMap.sort = null
            dataMap.order = null
        }
        getDataList()
    }

    return {
        ...toRefs(dataMap),
        onSortChange,
        onCurrentChange,
        onSizeChange,
        getParams
    }
}
