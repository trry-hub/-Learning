const Mock = require('mockjs')

const AllList = []
for (let i = 0; i < 50; i++) {
    AllList.push(Mock.mock({
        id: '@id',
        title: '@ctitle(10, 20)'
    }))
}

export default {
    'GET /mock/pages_example/manager/list': (req, res) => {
        let { title, from, limit } = req.query
        from = ~~from
        limit = ~~limit
        let list = AllList.filter(item => {
            return title ? item.title.includes(title) : true
        })
        let pageList = list.filter((item, index) => {
            return index >= from && index < (from + limit)
        })
        return res.json({
            error: '',
            state: 1,
            data: {
                list: pageList,
                total: list.length
            }
        })
    },
    'GET /mock/pages_example/manager/detail': (req, res) => {
        let info = AllList.filter(item => item.id == req.query.id)
        return res.json({
            error: '',
            state: 1,
            data: info[0]
        })
    },
    'POST /mock/pages_example/manager/create': (req, res) => {
        return res.json({
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        })
    },
    'POST /mock/pages_example/manager/edit': (req, res) => {
        return res.json({
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        })
    },
    'POST /mock/pages_example/manager/delete': (req, res) => {
        return res.json({
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        })
    }
}
