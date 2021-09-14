<template>
  <div id="dplayer" />
</template>

<script>
const Hls = require('hls.js')
import DPlayer from 'dplayer'
export default {
  name: 'Dplayer',
  components: {},
  props: {},
  data() {
    return {
      dp: {}
    }
  },
  computed: {},
  mounted() {
    // 初始化dplayer
    this.initDplayer()
    // 注册事件
    this.registerEvent()
  },
  methods: {
    initDplayer() {
      this.dp = new DPlayer({
        live: true,
        loop: true, // 循环播放
        lang: 'en', // 语言，可选'en', 'zh-cn', 'zh-tw',
        container: document.getElementById('dplayer'),
        video: {
          url: 'https://play.yaomaitong.net/qxs-live/3434f1cab37aa0225b4f760b5e823326_NLD540.m3u8', // 示例地址
          type: 'customHls',
          customType: {
            customHls: function(video) {
              const hls = new Hls()
              hls.loadSource(video.src)
              hls.attachMedia(video)
            }
          }
        }
      })
    },
    registerEvent() {
      this.dp.on('error', function(error) {
        console.log('error', error)
      })
    }
  }
}
</script>

<style scoped lang="scss">
// scss
#dplayer {
  width: 100%;
  height: 500px;
}
</style>
