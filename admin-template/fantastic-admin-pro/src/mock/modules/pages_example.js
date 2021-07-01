const area = require('@/util/area').default
const Mock = require('mockjs')
const Random = Mock.Random

// 管理员
const managerList = []
for (let i = 0; i < 50; i++) {
    managerList.push(Mock.mock({
        id: '@id',
        account: '@first',
        name: '@cname',
        mobile: /1\d{10}/,
        status: '@boolean'
    }))
}
const managerMock = [
    {
        url: 'pages_example/manager/list',
        type: 'get',
        result: option => {
            let { account, name, mobile, from, limit } = option.query
            from = ~~from
            limit = ~~limit
            let list = managerList.filter(item => {
                return account ? item.account.includes(account) : true
            })
            list = list.filter(item => {
                return name ? item.name.includes(name) : true
            })
            list = list.filter(item => {
                return mobile ? item.mobile == mobile : true
            })
            let pageList = list.filter((item, index) => {
                return index >= from && index < (from + limit)
            })
            return {
                error: '',
                state: 1,
                data: {
                    list: pageList,
                    total: list.length
                }
            }
        }
    },
    {
        url: 'pages_example/manager/detail',
        type: 'get',
        result: option => {
            let info = managerList.filter(item => item.id == option.query.id)
            return {
                error: '',
                state: 1,
                data: info[0]
            }
        }
    },
    {
        url: 'pages_example/manager/create',
        type: 'post',
        result: {
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        }
    },
    {
        url: 'pages_example/manager/edit',
        type: 'post',
        result: {
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        }
    },
    {
        url: 'pages_example/manager/delete',
        type: 'post',
        result: {
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        }
    },
    {
        url: 'pages_example/manager/password/reset',
        type: 'post',
        result: {
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        }
    },
    {
        url: 'pages_example/manager/change/status',
        type: 'post',
        result: {
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        }
    },
    {
        url: 'pages_example/manager/check',
        type: 'get',
        result: option => {
            let { key, value, id } = option.query
            let exist = false
            exist = managerList.some(item => {
                let flag
                switch (key) {
                    case 'account':
                        if (item.account == value && (id ? id != item.id : true)) {
                            flag = true
                        }
                        break
                    case 'mobile':
                        if (item.mobile == value && (id ? id != item.id : true)) {
                            flag = true
                        }
                        break
                }
                return flag
            })
            return {
                error: '',
                state: 1,
                data: {
                    exist: exist
                }
            }
        }
    }
]

// 运费模版
const deliveryList = []
for (let i = 0; i < 50; i++) {
    let address = []
    let p_index = Random.natural(0, area.length - 1)
    address.push(area[p_index].name)
    let c_index = Random.natural(0, area[p_index].children.length - 1)
    address.push(area[p_index].children[c_index].name)
    let a_index = Random.natural(0, area[p_index].children[c_index].children.length - 1)
    address.push(area[p_index].children[c_index].children[a_index].name)
    deliveryList.push(Mock.mock({
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
const deliveryMock = [
    {
        url: 'pages_example/shop/delivery/list',
        type: 'get',
        result: option => {
            let { title, from, limit } = option.query
            from = ~~from
            limit = ~~limit
            let list = deliveryList.filter(item => {
                return title ? item.title.includes(title) : true
            })
            let pageList = list.filter((item, index) => {
                return index >= from && index < (from + limit)
            })
            return {
                error: '',
                state: 1,
                data: {
                    list: pageList,
                    total: list.length
                }
            }
        }
    },
    {
        url: 'pages_example/shop/delivery/detail',
        type: 'get',
        result: option => {
            let info = deliveryList.filter(item => item.id == option.query.id)
            return {
                error: '',
                state: 1,
                data: info[0]
            }
        }
    },
    {
        url: 'pages_example/shop/delivery/create',
        type: 'post',
        result: {
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        }
    },
    {
        url: 'pages_example/shop/delivery/edit',
        type: 'post',
        result: {
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        }
    },
    {
        url: 'pages_example/shop/delivery/delete',
        type: 'post',
        result: {
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        }
    },
    {
        url: 'pages_example/shop/delivery/change/status',
        type: 'post',
        result: {
            error: '',
            state: 1,
            data: {
                isSuccess: true
            }
        }
    }
]

module.exports = [
    ...managerMock,
    ...deliveryMock
]
