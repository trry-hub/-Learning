<template>
    <div>
        <page-header title="ECharts" content="不建议使用第三方封装的组件（如：vue-echarts），因为 ECharts 本身文档和演示 demo 已经很完善且方便了，再使用第三方的组件在使用体验上反而会束手束脚">
            <el-button icon="el-icon-link" @click="open('https://echarts.apache.org/zh/index.html')">ECharts 官网</el-button>
        </page-header>
        <el-row :gutter="20" style="margin: -10px 10px;">
            <el-col :md="12">
                <page-main title="柱状图" style="margin: 10px 0;">
                    <div ref="chart1" style="width: 100%; height: 400px;" />
                </page-main>
            </el-col>
            <el-col :md="12">
                <page-main title="折线图" style="margin: 10px 0;">
                    <div ref="chart2" style="width: 100%; height: 400px;" />
                </page-main>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 0 10px;">
            <el-col :md="12">
                <page-main title="饼图" style="margin: 10px 0;">
                    <div ref="chart3" style="width: 100%; height: 400px;" />
                </page-main>
            </el-col>
            <el-col :md="12">
                <page-main title="雷达图" style="margin: 10px 0;">
                    <div ref="chart4" style="width: 100%; height: 400px;" />
                </page-main>
            </el-col>
        </el-row>
    </div>
</template>

<script>
const Echarts = require('echarts')

export default {
    data() {
        return {
            chart1: null,
            chart2: null,
            chart3: null,
            chart4: null
        }
    },
    mounted() {
        this.initChart1()
        this.initChart2()
        this.initChart3()
        this.initChart4()
        window.addEventListener('resize', () => {
            this.chart1.resize()
            this.chart2.resize()
            this.chart3.resize()
            this.chart4.resize()
        })
    },
    methods: {
        initChart1() {
            // 初始化
            this.chart1 = Echarts.init(this.$refs.chart1)
            // 配置数据
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
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
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '邮件营销',
                        type: 'bar',
                        stack: '广告',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'bar',
                        stack: '广告',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'bar',
                        stack: '广告',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '搜索引擎',
                        type: 'bar',
                        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                        markLine: {
                            lineStyle: {
                                type: 'dashed'
                            },
                            data: [
                                [{type: 'min'}, {type: 'max'}]
                            ]
                        }
                    },
                    {
                        name: '百度',
                        type: 'bar',
                        barWidth: 5,
                        stack: '搜索引擎',
                        data: [620, 732, 701, 734, 1090, 1130, 1120]
                    },
                    {
                        name: '谷歌',
                        type: 'bar',
                        stack: '搜索引擎',
                        data: [120, 132, 101, 134, 290, 230, 220]
                    },
                    {
                        name: '必应',
                        type: 'bar',
                        stack: '搜索引擎',
                        data: [60, 72, 71, 74, 190, 130, 110]
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        stack: '搜索引擎',
                        data: [62, 82, 91, 84, 109, 110, 120]
                    }
                ]
            }
            // 传入数据
            this.chart1.setOption(option)
        },
        initChart2() {
            // 初始化
            this.chart2 = Echarts.init(this.$refs.chart2)
            // 配置数据
            let option = {
                title: {
                    text: '堆叠区域图'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
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
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {},
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            }
            // 传入数据
            this.chart2.setOption(option)
        },
        initChart3() {
            // 初始化
            this.chart3 = Echarts.init(this.$refs.chart3)
            // 配置数据
            let option = {
                title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 335, name: '直接访问'},
                            {value: 310, name: '邮件营销'},
                            {value: 234, name: '联盟广告'},
                            {value: 135, name: '视频广告'},
                            {value: 1548, name: '搜索引擎'}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            // 传入数据
            this.chart3.setOption(option)
        },
        initChart4() {
            // 初始化
            this.chart4 = Echarts.init(this.$refs.chart4)
            // 配置数据
            let option =  {
                title: {
                    text: '基础雷达图'
                },
                tooltip: {},
                legend: {
                    data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [
                        { name: '销售（sales）', max: 6500},
                        { name: '管理（Administration）', max: 16000},
                        { name: '信息技术（Information Techology）', max: 30000},
                        { name: '客服（Customer Support）', max: 38000},
                        { name: '研发（Development）', max: 52000},
                        { name: '市场（Marketing）', max: 25000}
                    ]
                },
                series: [{
                    name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data: [
                        {
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
                            name: '预算分配（Allocated Budget）'
                        },
                        {
                            value: [5000, 14000, 28000, 31000, 42000, 21000],
                            name: '实际开销（Actual Spending）'
                        }
                    ]
                }]
            }
            // 传入数据
            this.chart4.setOption(option)
        },
        open(url) {
            window.open(url, 'top')
        }
    }
}
</script>
