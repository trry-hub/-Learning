<template>
    <div id="app">
        <RouterView />
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    watch: {
        '$store.state.keepAlive.list'(val) {
            process.env.NODE_ENV == 'development' && console.log(`[ keepAliveList ] ${val}`)
        },
        '$store.state.settings.mode': {
            handler() {
                if (this.$store.state.settings.mode == 'pc') {
                    if (this.$store.state.settings.enableSidebarCollapse) {
                        this.$store.commit('settings/updateThemeSetting', {
                            'sidebarCollapse': false
                        })
                    }
                }
                if (this.$store.state.settings.mode == 'mobile') {
                    this.$store.commit('settings/updateThemeSetting', {
                        'sidebarCollapse': true
                    })
                }
                document.body.setAttribute('data-mode', this.$store.state.settings.mode)
            },
            immediate: true
        },
        '$store.state.settings.layout': {
            handler() {
                document.body.setAttribute('data-layout', this.$store.state.settings.layout)
            },
            immediate: true
        },
        '$store.state.settings.theme': {
            handler() {
                document.body.setAttribute('data-theme', this.$store.state.settings.theme)
            },
            immediate: true
        },
        '$store.state.settings.showHeader': {
            handler() {
                document.body.removeAttribute('data-no-main-sidebar')
                if (this.$store.state.settings.showHeader || this.$store.state.menu.routes.length <= 1) {
                    document.body.setAttribute('data-no-main-sidebar', '')
                }
            },
            immediate: true
        },
        '$store.state.menu.routes': {
            handler() {
                document.body.removeAttribute('data-no-main-sidebar')
                if (this.$store.state.settings.showHeader || this.$store.state.menu.routes.length <= 1) {
                    document.body.setAttribute('data-no-main-sidebar', '')
                }
            },
            immediate: true,
            deep: true
        },
        '$store.state.settings.sidebarCollapse': {
            handler() {
                document.body.removeAttribute('data-sidebar-no-collapse')
                document.body.removeAttribute('data-sidebar-collapse')
                if (this.$store.state.settings.sidebarCollapse) {
                    document.body.setAttribute('data-sidebar-collapse', '')
                } else {
                    document.body.setAttribute('data-sidebar-no-collapse', '')
                }
            },
            immediate: true
        }
    },
    mounted() {
        window.onresize = () => {
            this.$store.commit('settings/setMode', document.body.clientWidth)
        }
        window.onresize()
    },
    methods: {},
    metaInfo() {
        return {
            title: this.$store.state.settings.enableDynamicTitle && this.$store.state.settings.title,
            titleTemplate: title => {
                return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
            }
        }
    }
}
</script>

<style scoped>
#app {
    height: 100%;
}
</style>
