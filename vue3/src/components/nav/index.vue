<template>
    <div class="nav">
        <van-nav-bar :title="title" :left-text="backText" :right-text="rightText.value" :fixed="true" :placeholder="true" :safe-area-inset-top="true" :border="border" :left-arrow="false" @click-left="onClickLeft" @click-right="onClickRight">
            <template #left>
                <van-icon name="wap-nav" size="30" color="#fff" />
            </template>
            <template #right>
                <van-icon name="search" size="30" color="#fff" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
interface parentDataType {
	title: string;
	border: boolean;
    backText: string;
    [propName: string]:any
}
export default defineComponent({
    name: 'Nav',
    props: {
        title: {
            type: String,
            default: 'Trry'
        },
        border: {
            type: Boolean,
            default: false
        },
        backText: {
            type: String,
            default: '默认内容'
        },
        rightText: {
            type: String,
            default: '返回'
        }
    },
    setup(props) {
        let data:parentDataType = reactive(Object.assign({}, props))

        const onClickLeft = () => {
            console.log(props)
        }

        const onClickRight = () => {
            console.log(data)
        }

        return {
            ...data,
            onClickLeft,
            onClickRight
        }
    }
})
</script>

<style scoped lang="scss">
// scss
.nav {
	box-sizing: border-box;
}
::v-deep .van-nav-bar {
	background-color: #d5453a;
	.van-nav-bar__title {
		color: #fff;
	}
}
</style>
