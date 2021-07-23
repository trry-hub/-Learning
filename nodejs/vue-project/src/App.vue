<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            browserType: ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange']
        }
    },
    mounted() {
        this.initEventListener('addEventListener')
    },
    beforeDestroy() {
        this.initEventListener('removeEventListener')
    },
    methods: {
        initEventListener(eventType) {
            this.browserType.forEach(item => {
                window[eventType](item, () => this.onFullScreenEsc())
            })
        },
        onFullScreenEsc() {
            const isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.mozFullScreenElement || false
            this.$store.commit('global/SETISFULLSCREEN', isFullScreen)
        }
    }
}
</script>
