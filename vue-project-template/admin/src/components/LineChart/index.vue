<template>
    <div :ref="id" :class="id" class="line-chart" />
</template>

<script>
import chartsMixins from '@/mixins/charts'
import { EXT } from '@/utils/util'
export default {
    name: 'LineChart',
    mixins: [chartsMixins],
    props: {
        options: {
            type: Object,
            default: Object
        }
    },
    data() {
        return {
            id: this.$nanoid(),
            defaultOpt: {
                title: {
                    text: ''
                },
                legend: {
                    icon: 'rect',
                    right: '3%',
                    itemHeight: 18, // 修改icon图形大小
                    itemWidth: 18
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false
                    // data: ['1月','2月','3月','4月','5月','6月']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    // {
                    //     name: '邮件营销',
                    //     type: 'line',
                    //     stack: '总量',
                    //     data: [120,132,101,134,90,230,210]
                    // },
                    // {
                    //     name: '联盟广告',
                    //     type: 'line',
                    //     stack: '总量',
                    //     data: [220,182,191,234,290,330,310]
                    // }
                ]
            }
        }
    },
    watch: {
        options: {
            handler: function(newVal, oldVal) {
                this.updateChart(newVal)
            },
            deep: true
        }
    },
    mounted() {
        this.creatChart()
    },
    beforeDestroy() {
        this[this.id].dispose()
    },
    methods: {
        updateChart(options) {
            this[this.id].setOption(options)
        },
        // 创建或更新图表
        creatChart() {
            if (this[this.id]) {
                this[this.id].dispose()
            }
            const dom = this.$refs[this.id]
            this[this.id] = this.$echarts.init(dom)
            const params = new EXT().merge({}, this.defaultOpt, this.options)
            this[this.id].setOption(params)
        },
        chartResize() {
            this[this.id].resize()
        }
    }
}
</script>

<style lang="scss" scoped>
.line-chart {
	height: 100%;
}
</style>