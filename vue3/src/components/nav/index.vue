<!--
 * @Author: trry
 * @Date: 2020-11-09 11:11:49
 * @LastEditors: trry
 * @LastEditTime: 2020-11-09 18:07:36
 * @Description: file content
-->
<template>
    <div class="nav">
        <van-nav-bar :title="title" :left-text="backText" :right-text="rightText" :fixed="true" :placeholder="true" :safe-area-inset-top="true" :border="border" :left-arrow="false" @click-left="onClickLeft" @click-right="onClickRight">
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
    rightText: string
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
        }
    },
    setup(props) {
        // let {title, border, backText} = props
        // let parentData: parentDataType = reactive(props)

        const onClickLeft = () => {
            console.log(props)
        }

        const onClickRight = () => {
            // console.log(parentData)
        }

        return {
            // ...parentData,
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
