<template>
    <div :ref="id" :class="id" class="line-chart" />
</template>

<script>
import chartsMixins from '@/mixins/charts'
import { EXT } from '@/utils/util'
export default {
    name: 'PieChart',
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
                    text: '',
                    left: 'center',
                    top: '65%'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    top: '75%',
                    orient: 'rect',
                    itemHeight: 10, // 修改icon图形大小
                    itemWidth: 10,
                    left: 'center'
                },
                series: [
                    {
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '35%'],
                        selectedMode: 'single',
                        startAngle: 270, // 起始角度
                        label: {
                            show: false
                        },
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
        }
    },
    watch: {
        options: {
            handler: function(newVal) {
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