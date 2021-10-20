<template>
    <div class="bg-banner">
        <div class="logo">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <BannerSwiper />
        <div id="login-box">
            <el-tabs v-model="activeName" class="login-tabs">
                <el-tab-pane label="微信登录" name="first">
                    <WxLogin ref="wxloginRef" />
                </el-tab-pane>
                <el-tab-pane label="验证码登录" name="second">
                    <AuthCode />
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import BannerSwiper from './components/banner_swiper.vue'
import WxLogin from './components/wxlogin.vue'
import AuthCode from './components/auth_code.vue'

export default defineComponent({
    name: 'Login',
    components: {
        BannerSwiper,
        WxLogin,
        AuthCode
    },
    setup() {
        const wxloginRef = ref(null)
        const activeName = ref('first')
        function handleSuccessLogin(res) {
            this.fullscreenLoading = true
            // 所有登录统一成功操作 设置缓存 人机验证 路由跳转等
            // 1.设置新工程 userinfo => cookie,  请求 permission 并设置 => session
            // 2.设置原工程的 userinfo => cookie , username => locolstorage，并且 window.location.href = `老工程+/index`
            // personToken会有没有 就是这个人账号登录 没有绑定手机
            let { personToken, orgLoginVo } = res
            setPersonInfo(res)
            this.getPermission().then(
                reason => {
                    // 原工程处理
                    let data = {
                        personInfo: res,
                        type: 'setLogin'
                    }
                    this.$postMessage(data)
                    this.fullscreenLoading = false
                },
                rea => {
                    this.fullscreenLoading = false
                    this.$message.error(rea)
                }
            )
        }
        function setPersonInfo(cvalue = {}, cname = 'personInfo', exdays = 30) {
            cvalue = JSON.stringify(cvalue)
            setCookie(cvalue, cname, exdays)
        }
        return {
            activeName,
            wxloginRef
        }
    }
})
</script>

<style lang="scss" scoped>
[data-mode="mobile"] {
    #login-box {
        max-width: 80%;
        .login-banner {
            display: none;
        }
    }
}
:deep(input[type="authcode"]::-ms-reveal) {
    display: none;
}
.bg-banner {
    width: 100%;
    height: 100%;
    min-width: 1000px;
    min-height: 600px;
    position: relative;
    background-image: url("@/assets/images/login/bg_blue.png");
    background-size: cover;
    background-position: center center;
}
.logo {
    width: 230px;
    height: 58px;
    position: fixed;
    top: 43px;
    left: 47px;
    z-index: 2;
    img {
        width: 100%;
    }
}
#login-box {
    position: absolute;
    top: 50%;
    left: calc(50% + 240px);
    transform: translateX(-50%) translateY(-50%);
    overflow: hidden;
    z-index: 10;
    .login-tabs {
        width: 540px;
        height: 560px;
        border-radius: 8px;
        background-color: #fff;
        :deep(.el-tabs__nav) {
            width: 100%;
            display: flex;
            padding: 15px 0;
            justify-content: center;
            .el-tabs__active-bar {
                height: 3px;
            }
            .el-tabs__item {
                font-size: 20px;
                &#tab-first {
                    margin-right: 20px;
                }
                &#tab-second {
                    margin-left: 20px;
                }
            }
        }
        :deep(.el-tabs__content) {
            box-sizing: border-box;
        }
    }
    :deep(.el-input) {
        height: 48px;
        line-height: inherit;
        width: 100%;
        input {
            height: 48px;
        }
        .el-input__prefix,
        .el-input__suffix {
            display: flex;
            align-items: center;
        }
        .el-input__prefix {
            left: 10px;
        }
        .el-input__suffix {
            right: 10px;
        }
    }
    .el-checkbox {
        margin: 20px 0;
    }
}
.copyright {
    position: absolute;
    bottom: 30px;
    width: 100%;
    margin: 0;
    mix-blend-mode: difference;
}
</style>
