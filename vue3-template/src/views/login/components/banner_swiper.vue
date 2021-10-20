<template>
  <swiper ref="mySwiper" :navigation="swiperOption.navigation" :pagination="swiperOption.pagination" :speed="swiperOption.speed" autoplay :modules="modules" effect="fade" class="swiper-reset">
    <swiper-slide v-for="(item,index) in slideList" :key="index">
      <img :src="getImgUrl(item.bgImage)" alt="" class="bg-image">
      <div class="slide-box">
        <div class="text-content">
          <div class="text-title">{{ item.title }}</div>
          <div class="text-desc">{{ item.desc }}</div>
          <img class="slide-image" :src="getImgUrl(item.navImage)" alt="">
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

import { EffectFade, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default defineComponent({
  name: 'BannerSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const scopedData = reactive({
      swiperOption: {
        loop: true,
        speed: 2000,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          title: '企业级低成本学术合规化',
          desc: '打造数字化证据链，赋能拓展更多线上学术推广场景',
          navImage: '/src/assets/images/login/slide_blue.png',
          bgImage: '/src/assets/images/login/bg_blue.png'
        },
        {
          title: '厂家学术推广费用透明化',
          desc: '杜绝临床一线代表摆拍、开假会',
          navImage: '/src/assets/images/login/slide_oringe.png',
          bgImage: '/src/assets/images/login/bg_oringe.png'
        },
        {
          title: '医生大数据深度挖掘',
          desc: '多场景深层次沉淀数据，反馈优化学术产出',
          navImage: '/src/assets/images/login/slide_purple.png',
          bgImage: '/src/assets/images/login/bg_purple.png'
        }
      ]
    })
    const getImgUrl = path => {
      const modules = import.meta.globEager('/src/assets/images/login/*')
      return modules[path].default
    }

    return {
      ...toRefs(scopedData),
      EffectFade,
      getImgUrl,
      modules: [Pagination, EffectFade, Autoplay]
    }
  }
})
</script>

<style lang="scss" scoped>
.swiper-reset {
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.slide-box {
  position: absolute;
  top: 50%;
  left: calc(50% - 280px);
  max-height: 560px;
  transform: translate(-50%, -50%);
}
.bg-image {
  width: 100%;
  height: 100%;
}
.text-content {
  width: 460px;
  text-align: center;
  .slide-image {
    object-fit: cover;
  }
}
.text-title {
  font-size: 24px;
  color: #fff;
  padding-top: 15px;
  font-weight: bold;
}
.text-desc {
  font-size: 14px;
  color: #fff;
  padding-bottom: 20px;
}
</style>
