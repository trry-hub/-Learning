<template>
    <div :ref="id" :class="id" class="line-chart" />
</template>

<script>
import mixinChart from '@/mixins/charts'
import { EXT } from '@/utils'
export default {
    name: 'LineBarChart',
    mixins: [mixinChart],
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
                    boundaryGap: true,
                    data: []
                },
                grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '0%',
                    containLabel: true
                },
                yAxis: {
                    type: 'value'
                },
                series: []
            },
            // 当前最新数据
            currentOpt: {},
            // 空数据
            emptyOption: {
                title: [{ // 无数据时占位用
                }, {
                    show: true, // 判断有没有数据，没有则show为true
                    subtext: '暂无数据',
                    subtextStyle: {
                        color: '#ccc',
                        fontSize: 18
                    },
                    left: 'center',
                    top: 'center'
                }]
            }
        }
    },
    watch: {
        options: {
            handler(newVal) {
                // 实时更新空数据时标题
                this.emptyOption.title[0] = this.options.title
                // 处理空数据
                if (newVal.xAxis.data.length === 0) {
                    this[this.id].setOption(this.emptyOption, { notMerge: true })
                } else {
                    new EXT().merge(this.currentOpt, newVal)
                    this.updateChart(this.currentOpt)
                }
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
            this[this.id].setOption(options, {replaceMerge: ['title']})
        },
        // 创建或更新图表
        creatChart() {
            if (this[this.id]) {
                this[this.id].dispose()
            }
            const dom = this.$refs[this.id]
            this[this.id] = this.$echarts.init(dom)
            new EXT().merge(this.currentOpt, this.defaultOpt, this.options)
            // 初始化空数据时标题
            this.emptyOption.title[0] = this.options.title
            if (this.currentOpt?.xAxis?.data?.length === 0) {
                // 处理空数据
                this[this.id].setOption(this.emptyOption, { notMerge: true })
            } else {
                this[this.id].setOption(this.currentOpt)
            }
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