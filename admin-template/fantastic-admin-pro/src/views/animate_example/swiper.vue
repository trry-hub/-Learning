<template>
    <div>
        <page-header title="轮播动画" content="基于 Swiper & vue-awesome-swiper">
            <el-dropdown split-button @click="open('https://swiperjs.com/')" @command="open">
                <i class="el-icon-link" />
                Swiper 官网
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="https://www.swiper.com.cn/">Swiper 中文官网</el-dropdown-item>
                    <el-dropdown-item command="https://github.surmon.me/vue-awesome-swiper/">vue-awesome-swiper 官网</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </page-header>
        <page-main>
            <p>Swiper 6.x, vue-awesome-swiper 4.x 会导致部分设置不生效，解决办法请看源码。</p>
            <p>建议有能力的小伙伴，可以直接使用 Swiper 官方提供的 Vue 组件。</p>
        </page-main>
        <el-row :gutter="20" style="margin: -10px 10px;">
            <el-col :md="8">
                <page-main style="margin: 10px 0;">
                    <swiper class="swiper">
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide>
                        <swiper-slide>Slide 5</swiper-slide>
                        <swiper-slide>Slide 6</swiper-slide>
                        <swiper-slide>Slide 7</swiper-slide>
                        <swiper-slide>Slide 8</swiper-slide>
                        <swiper-slide>Slide 9</swiper-slide>
                        <swiper-slide>Slide 10</swiper-slide>
                    </swiper>
                </page-main>
            </el-col>
            <el-col :md="8">
                <page-main style="margin: 10px 0;">
                    <swiper class="swiper" :options="swiperOption2">
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide>
                        <swiper-slide>Slide 5</swiper-slide>
                        <swiper-slide>Slide 6</swiper-slide>
                        <swiper-slide>Slide 7</swiper-slide>
                        <swiper-slide>Slide 8</swiper-slide>
                        <swiper-slide>Slide 9</swiper-slide>
                        <swiper-slide>Slide 10</swiper-slide>
                        <div slot="button-prev" class="swiper-button-prev" />
                        <div slot="button-next" class="swiper-button-next" />
                    </swiper>
                </page-main>
            </el-col>
            <el-col :md="8">
                <page-main style="margin: 10px 0;">
                    <swiper class="swiper" :options="swiperOption3">
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide>
                        <swiper-slide>Slide 5</swiper-slide>
                        <swiper-slide>Slide 6</swiper-slide>
                        <swiper-slide>Slide 7</swiper-slide>
                        <swiper-slide>Slide 8</swiper-slide>
                        <swiper-slide>Slide 9</swiper-slide>
                        <swiper-slide>Slide 10</swiper-slide>
                        <div slot="pagination" class="swiper-pagination" />
                    </swiper>
                </page-main>
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: -10px 10px;">
            <el-col :md="8">
                <page-main style="margin: 10px 0;">
                    <swiper class="swiper" :options="swiperOption4">
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide>
                        <swiper-slide>Slide 5</swiper-slide>
                        <swiper-slide>Slide 6</swiper-slide>
                        <swiper-slide>Slide 7</swiper-slide>
                        <swiper-slide>Slide 8</swiper-slide>
                        <swiper-slide>Slide 9</swiper-slide>
                        <swiper-slide>Slide 10</swiper-slide>
                        <div slot="pagination" class="swiper-pagination" />
                    </swiper>
                </page-main>
            </el-col>
            <el-col :md="8">
                <page-main style="margin: 10px 0;">
                    <swiper class="swiper" :options="swiperOption5">
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide>
                        <swiper-slide>Slide 5</swiper-slide>
                        <swiper-slide>Slide 6</swiper-slide>
                        <swiper-slide>Slide 7</swiper-slide>
                        <swiper-slide>Slide 8</swiper-slide>
                        <swiper-slide>Slide 9</swiper-slide>
                        <swiper-slide>Slide 10</swiper-slide>
                        <div slot="pagination" class="swiper-pagination" />
                        <div slot="button-prev" class="swiper-button-prev" />
                        <div slot="button-next" class="swiper-button-next" />
                    </swiper>
                </page-main>
            </el-col>
            <el-col :md="8">
                <page-main style="margin: 10px 0;">
                    <swiper class="swiper" :options="swiperOption6">
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide>
                        <swiper-slide>Slide 5</swiper-slide>
                        <swiper-slide>Slide 6</swiper-slide>
                        <swiper-slide>Slide 7</swiper-slide>
                        <swiper-slide>Slide 8</swiper-slide>
                        <swiper-slide>Slide 9</swiper-slide>
                        <swiper-slide>Slide 10</swiper-slide>
                        <div slot="scrollbar" class="swiper-scrollbar" />
                    </swiper>
                </page-main>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// https://github.com/surmon-china/vue-awesome-swiper/issues/688
import Vue from 'vue'
import { Swiper as SwiperClass, Pagination, Mousewheel, Navigation, Autoplay, Scrollbar, A11y, Controller, EffectFade } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay, Scrollbar, A11y, Controller, EffectFade])
Vue.use(getAwesomeSwiper(SwiperClass))
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass)
import 'swiper/swiper-bundle.css'

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOption2: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOption3: {
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            swiperOption4: {
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                }
            },
            swiperOption5: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOption6: {
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true
                }
            }
        }
    },
    methods: {
        open(url) {
            window.open(url, 'top')
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: 700;
        font-size: 36.4px;
        background-color: #fff;
    }
}
</style>
