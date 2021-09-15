import area from '../../util/area'
const Mock = require('mockjs')
const Random = Mock.Random

const AllList = []
for (let i = 0; i < 50; i++) {
    let address = []
    let p_index = Random.natural(0, area.length - 1)
    address.push(area[p_index].name)
    let c_index = Random.natural(0, area[p_index].children.length - 1)
    address.push(area[p_index].children[c_index].name)
    let a_index = Random.natural(0, area[p_index].children[c_index].children.length - 1)
    address.push(area[p_index].children[c_index].children[a_index].name)
    AllList.push(Mock.mock({
        id: '@id',
        title: '@ctitle(5, 10)',
        address: address,
        type: Random.natural(1, 2),
        first_step: Random.natural(1, 5),
        first_price: Random.natural(1, 5),
        continued_step: Random.natural(5, 10),
        continued_price: Random.natural(5, 10),
        infos: [
            {
                list: ['430000', '500000'],
                first_step: Random.natural(1, 5),
                first_price: Random.natural(1, 5),
                continued_step: Random.natural(5, 10),
                continued_price: Random.natural(5, 10)
            }
        ],
        status: '@boolean'
    }))
}

export default {
    'GET /mock/pages_example/shop/delivery/list': (req, res) => {
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
    'GET /mock/pages_example/shop/delivery/detail': (req, res) => {
        let info = AllList.filter(item => item.id == req.query.id)
        return res.json({
            error: '',
            state: 1,
            data: info[0]
        })
    },
    'POST /mock/pages_example/shop/delivery/create': (req, res) => {
        return res.json({
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        })
    },
    'POST /mock/pages_example/shop/delivery/edit': (req, res) => {
        return res.json({
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        })
    },
    'POST /mock/pages_example/shop/delivery/delete': (req, res) => {
        return res.json({
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        })
    },
    'POST /mock/pages_example/shop/delivery/change/status': (req, res) => {
        return res.json({
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        })
    }
}
