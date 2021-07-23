export default {
    data() {
        return {
            _ChartResizeTimmer: null, // 定时器
            _ChartResizeWindowWidth: '', // 屏幕宽度
            wait: 100
        }
    },
    mounted() {
        this._ChartResizeWindowWidth = window.innerWidth
        window.addEventListener('resize', this._ChartResizeOnResize)
    },
    methods: {
        _ChartResizeOnResize(event) {
            if (this._ChartResizeTimmer) clearTimeout(this._ChartResizeTimmer)
            this._ChartResizeTimmer = setTimeout(() => {
                if (event.target.innerWidth !== this._ChartResizeWindowWidth) {
                    this.chartResize()
                    // 同步当前窗口宽度
                    this._ChartResizeWindowWidth = event.target.innerWidth
                }
            }, this.wait)
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this._ChartResizeOnResize)
    }
}
