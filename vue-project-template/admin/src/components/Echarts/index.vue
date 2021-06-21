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
import { optionsList } from './options'
export default {
    name: 'Echarts',
    mixins: [chartsMixins],
    data() {
        return {
            chartName: 'charts-container',
            // 图表类型
            typeList: optionsList,
            // 中国地图基础数据
            locationData: {},
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
                    trigger: 'axis'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                toolbox: {
                    show: true, // 是否显示工具栏组件。
                    orient: 'horizontal', // 工具栏 icon 的布局朝向。
                    itemSize: 15, // 工具栏 icon 的大小
                    itemGap: 10, // 工具栏 icon 每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: { readOnly: false },
                        magicType: { type: ['line', 'bar'] },
                        restore: {},
                        saveAsImage: {}
                    }
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
        async __change(type) {
            const [row] = this.typeList.filter(item => item.series[0].type === type)
            // 深合并
            const params = new EXT().merge({}, this.defaultOpts, row)
            if (type !== 'line' && type !== 'bar') {
                // 饼图 需要删除 x,y 轴
                delete params.xAxis
                delete params.yAxis
                if (type === 'map') {
                    this.locationData = await this.getGeoJsonData()
                    this.$echarts.registerMap('china', this.locationData)
                }
            }
            this.updateOpts = params
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
        },

        /**
         *  数据处理
         **/
        async getGeoJsonData(location = 'china') {
            try {
                return await this.$get(`https://unpkg.com/echarts@3.6.2/map/json/${location}.json`)
            } catch (error) {
                console.log(error)
            }
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