<template>
  <div class="wechat-login">
    <div v-if="true" class="qr-code-cart">
      <div class="code-wrap" @click="getWxCodeImage">
        <img :src="wxCodeImage.qrCodeUrl" class="qr-code" alt="">
      </div>
      <p>打开手机微信扫一扫登录</p>
      <div class="advertise">
        <div>
          <p class="no-input" />免输入
        </div>
        <div>
          <p class="faster" />更快
        </div>
        <div>
          <p class="more-secure" />更安全
        </div>
      </div>
    </div>
    <div v-else class="error-card">
      <p class="fail" />
      <span>非常抱歉，您还没有后台登录权限请联系相关人员开通后重试</span>
      <el-button plain>更换其他微信重试</el-button>
    </div>
    <div class="more-problem">更多账号密码问题请联系客服:13758257847</div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, reactive, toRefs } from 'vue'

import { ElMessage } from 'element-plus'
import api from '@/api'
import APIURL from '@/api/urls'
export default defineComponent({
  name: 'WxLogin',
  setup() {
    const staticState = {
      loginStatusInterval: null
    }
    const dataMap = reactive({
      wxCodeImage: {}
    })

    onMounted(() => {
      // 获取二维码
      getWxCodeImage()
    })

    onUnmounted(() => {
      // 清楚获取登录状态计时器
      clearLoginStatusInterval()
    })
    /**
     * 请求登录状态信息
     * 调用时机：初始化
     */
    function getQrCodeLoginStatus() {
      // 清除定时器，避免定时器叠加
      clearLoginStatusInterval()
      staticState.loginStatusInterval = setInterval(async() => {
        const params = {
          loopKey: dataMap.wxCodeImage.loopKey,
          _t: new Date().getTime()
        }
        try {
          const { data } = await api.get(APIURL.checkWxCodeResult, { params })
          const { status } = data
          console.log('checkWxCodeResult', status, data)
          // 状态：SUCCESS 扫码成功，NO_USER 没找到用户；WAIT_FOR_SCAN 等待扫码; QRCODE_EXPIRED 二维码过期; NO_PERMISSION 不是医生、没认证、没直播等 ; NOT_BIND 未绑定账号；NOT_THIS_WECHAT 不是当前微信
          if (status === 'SUCCESS') {
            if (data.orgLoginVo) {
              // 登录成功会返回personToken 和 userinfo
              clearLoginStatusInterval()
              this.handleSuccessLogin(data)
            } else if (data.personToken) {
              // setPersonToken(data.personToken)
              // this.showFactoryModal = true
            }
          } else if (status === 'QRCODE_EXPIRED') {
            // ElMessage.error('当前二维码已过期，请点击二维码扫码重试')
            // clearLoginStatusInterval()
            dataMap.activeName === 'first' && getWxCodeImage()
          } else if (status === 'NOT_BIND' || status === 'NO_USER') {
            this.scanDialogVisible = true
            this.scanDialogMsg = '当前微信号尚未绑定任何账号，请登录后绑定'
            clearLoginStatusInterval()
          } else if (status !== 'WAIT_FOR_SCAN') {
            ElMessage.error(status)
            clearLoginStatusInterval()
          }
        } catch (error) {
          console.log(error)
        }
      }, 3000)
    }
    /**
     * 获取二维码
     * tab 切换到微信登录时/点击 qrcode 时
     */
    async function getWxCodeImage() {
      const params = {
        codeType: 7,
        checkValue: 3,
        _t: new Date().getTime()
      }
      try {
        const { data } = await api.get(APIURL.getWxCodeImage, { params })
        dataMap.wxCodeImage = data
        // 获取扫码登录状态
        getQrCodeLoginStatus()
      } catch (error) {
        console.log(error)
      }
    }
    /**
     * 清除检查登录状态计时器
     * 调用时机：收/发消息事件触发时 回顶
     * @param {Object} state
     * @param {Message[]|Message} data
     * @returns
     */
    function clearLoginStatusInterval() {
      clearInterval(staticState.loginStatusInterval)
      staticState.loginStatusInterval = null
    }
    /**
     * 处理tab切换
     * 调用时机：点击切换login tabs 时执行
     */
    function handelTabClick(actName) {
      if (actName !== 'first') {
        clearLoginStatusInterval()
      } else {
        getWxCodeImage()
      }
    }

    return {
      ...toRefs(dataMap),
      getWxCodeImage,
      handelTabClick
    }
  }
})
</script>

<style lang="scss">
.wechat-login {
  padding: 30px;
  .qr-code-cart {
    text-align: center;
    box-sizing: border-box;
    .code-wrap {
      width: 220px;
      height: 220px;
      box-sizing: border-box;
      border: 1px solid #e9eaeb;
      // padding: 10px;
      margin: 0 auto;
      cursor: pointer;
      .qr-code {
        width: 100%;
        height: 100%;
        background: #d8d8d8;
      }
    }
    > span {
      width: 154px;
      font-size: 14px;
      font-family: MicrosoftYaHeiUI;
      margin: 20px 0;
      color: #000;
      line-height: 18px;
    }
    .advertise {
      width: 290px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      > div {
        display: flex;
        align-items: center;
        color: #b6bbc7;
        > p {
          margin: 0;
          margin-right: 12px;
        }
      }
      .no-input {
        @include login-sprite(no-input);
      }
      .faster {
        @include login-sprite(faster);
      }
      .more-secure {
        @include login-sprite(more-secure);
      }
    }
  }
  .error-card {
    .fail {
      @include login-sprite(fail);
    }
  }
  .more-problem {
    text-align: center;
    font-size: 14px;
    margin-top: 45px;
  }
}
</style>
