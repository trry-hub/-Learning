<template>
  <div class="home">
    <dplayer />
    <demo ref="demo" />
  </div>
</template>

<script>
import Dplayer from './Dplayer.vue'
export default {
  name: 'Home',
  components: { Dplayer },
  mounted() {
    // this.getData()
  },
  methods: {
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
