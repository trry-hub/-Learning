export default {
    data() {
        return {
            sort: null,
            order: null,
            pagination: {
                pageNo: 1,
                pageSize: 10,
                total: 0,
                sizes: [10, 20, 50, 100],
                layout: 'total, prev, pager, next, jumper, sizes'
            }
        }
    },
    methods: {
        getParams(params = {}) {
            const baseParams = {
                //   from: (this.pagination.pageNo - 1) * this.pagination.pageSize,
                //   limit: this.pagination.pageSize
                pageNo: this.pagination.pageNo,
                pageSize: this.pagination.pageSize
            }
            if (this.sort && this.order) {
                baseParams.sort = this.sort
                baseParams.order = this.order
            }
            Object.assign(baseParams, params)
            return baseParams
        },
        onSizeChange(size) {
            this.pagination.pageSize = size
            this.getDataList()
        },
        onCurrentChange(page) {
            this.pagination.pageNo = page
            this.getDataList()
        },
        onSortChange(params) {
            if (params.order) {
                this.sort = params.prop
                this.order = params.order === 'ascending' ? 'asc' : 'desc'
            } else {
                this.sort = null
                this.order = null
            }
            this.getDataList()
        }
    }
}
