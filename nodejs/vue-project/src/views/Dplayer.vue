<template>
  <div id="dplayer">dplayer</div>
</template>

<script>
let Hls = require('hls.js')
import DPlayer from 'dplayer'
export default {
  name: 'Dplayer',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  mounted() {
    this.initDplayer()
  },
  methods: {
    initDplayer() {
      const dp = new DPlayer({
        live: true,
        loop: true, // 循环播放
        lang: "en", // 语言，可选'en', 'zh-cn', 'zh-tw',
        container: document.getElementById('dplayer'),
        video: {
          url: 'https://live.carvedu.com/a/b.m3u8?auth_key=1589281526-0-0-02d0913b6a725efdb53f0deed823e418', // 示例地址
          type: 'customHls',
          customType: {
            customHls: function (video, player) {
              const hls = new Hls()
              hls.loadSource(video.src)
              hls.attachMedia(video)
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
// scss
#dplayer{
  width: 100%; 
  height: 500px;
}
</style>
