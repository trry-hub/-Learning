<template>
    <div class="wrapper">
        <div :ref="chartName" :class="chartName" />
        <el-form :model="updateOpts" inline size="small">
            <el-form-item label="类型" prop="type">
                <el-select v-model="updateOpts.series[0].type" placeholder="请选择" @change="__change">
                    <el-option v-for="item in typeList" :key="item.series[0].type" :label="item.title.text" :value="item.series[0].type" />
                </el-select>
            </el-form-item>
            <el-form-item label="初始化" prop="type">
                <el-button @click="onReset">初始化</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
/**
 *  charts图表组件
 *  可实现配置 折线图  饼图  柱状图  区域图
 **/
import chartsMixins from '@/mixins/charts'
import { EXT } from '@/utils'
export default {
    name: 'Echarts',
    mixins: [chartsMixins],
    data() {
        return {
            chartName: 'charts-container',
            // 图表类型
            typeList: [{
                title: {
                    text: '折线图'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    type: 'line'
                }]
            }, {
                title: {
                    text: '柱状图'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    type: 'bar'
                }]
            }, {
                title: {
                    text: '饼图'
                },
                series: [{
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '搜索引擎' },
                        { value: 735, name: '直接访问' },
                        { value: 580, name: '邮件营销' },
                        { value: 484, name: '联盟广告' },
                        { value: 300, name: '视频广告' }
                    ]
                }]
            }, {
                title: {
                    text: '区域图'
                },
                series: [{
                    type: 'area',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '搜索引擎' },
                        { value: 735, name: '直接访问' },
                        { value: 580, name: '邮件营销' },
                        { value: 484, name: '联盟广告' },
                        { value: 300, name: '视频广告' }
                    ]
                }]
            }],
            // 更新图表的配置参数
            updateOpts: {
                series: [{
                    type: 'line'
                }]
            },
            // 创建图表的配置参数,默认折线图
            defaultOpts: {
                title: {
                    text: 'Charts',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    type: 'line',
                    data: [150, 230, 224, 218, 135, 147, 260]
                }]
            }
        }
    },
    mounted() {
        this.onCreateChart()
    },
    methods: {
        // 切换类型
        __change(type) {
            const [row] = this.typeList.filter(item => item.series[0].type === type)
            // 深合并
            const params = new EXT().merge({}, this.defaultOpts, row)
            if (type === 'pie') {
                // 饼图 需要删除 x,y 轴
                delete params.xAxis
                delete params.yAxis
            }
            this[this.chartName].setOption(params, { notMerge: true })
        },
        // 创建charts
        onCreateChart() {
            const { chartName } = this
            const dom = this.$refs[chartName]
            this[chartName] = this.$echarts.init(dom)
            this[chartName].setOption(this.defaultOpts)
        },
        // 更新
        onUpdateChart() {
            this[this.chartName].setOption(this.updateOpts)
        },
        // 监听窗口变化
        chartResize() {
            this[this.chartName].resize()
        },
        // 重置
        onReset() {
            this[this.chartName].dispose()
            this.onCreateChart()
        }
    }
}
</script>
<style lang="scss" scoped>
//scss
.wrapper {
	.charts-container {
		height: 500px;
	}
}
</style>