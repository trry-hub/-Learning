import { deepClone } from '@/utils'
const state = {
    baseList: [
        {
            name: '输入框',
            componentName: 'el-input',
            props: {},
            bindDataTotag: {
                'v-model': 'value',
                placeholder: '请输入内容',
                ':clearable': true
            },
            bindMethodsTotag: {
                '@keyup.enter.native': 'onClick'
            },
            data: {
                value: ''
            },
            methods: {
                onClick() {
                    this.$message(this.value)
                }
            },
            computed: {}
        },
        {
            name: '折线图',
            componentName: 'line-bar-chart',
            bindDataTotag: {
                options: {
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                },
                style: {
                    width: '100%',
                    height: '500px'
                }
            },
            methods: {},
            computed: {}
        },
        {
            name: '柱状图',
            componentName: 'line-bar-chart',
            bindDataTotag: {
                options: {
                    title: {
                        text: '柱状图'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            barWidth: '60%',
                            data: [10, 52, 200, 334, 390, 330, 220]
                        }
                    ]
                },
                style: {
                    width: '100%',
                    height: '500px'
                }
            }
        },
        {
            name: '按钮',
            componentName: 'el-button',
            propsToData: {},
            methods: {},
            computed: {}
        }
    ]
}
const mutations = {
    SETOTHERCOMPONENTS(state, data) {
        state.baseList = deepClone(data)
    }
}
const actions = {}
const getters = {}
export default {
    namespaced: true, // 开启命名空间
    state,
    mutations,
    actions,
    getters
}
