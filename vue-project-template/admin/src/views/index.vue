<template>
    <div class="home">
        <dir id="dplayer" />
    </div>
</template>

<script>
import DPlayer from 'dplayer'
export default {
    name: 'Home',
    mounted() {
        // this.getData()
        this.initDPlayer()
    },
    methods: {
        initDPlayer() {
            new DPlayer({
                container: document.getElementById('dplayer'),
                screenshot: true,
                video: {
                    url: 'https://video.yaomaitong.net/356f2c7840bd4305a6367c7dcf4530d0/e38ce0183dfd4055b6aed463bb1aa5f3-9f6a5769eb52428c674845bf84d214e2-ld.mp4'
                }
            })
        },

        // player is ready
        playerReadied(player) {
            console.log('the player is readied', player)
            // you can use it to do something...
            // player.[methods]
        },
        async getData() {
            try {
                // const res = await this.$get('/login', { params: { name: 'zhangsan' } })
                // console.log(res)

                console.log(this.$store)

                const postres = await this.$post('/login', { name: 'zhangsan' })
                console.log(postres)
            } catch (error) {
                console.log(error)

            }
        }
    }
}
</script>

<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
}
#dplayer {
	width: 900px;
	margin: 0 auto;
}
</style>
