<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form" label-position="left">
    <div>
      <el-form-item prop="mobile">
        <el-input ref="name" v-model.number.trim="loginForm.mobile" :maxlength="11" class="input" placeholder="手机号" type="text" tabindex="1" />
      </el-form-item>
      <el-form-item prop="smsCaptcha" style="margin-top: 40px;">
        <el-input ref="smsCaptcha" v-model.trim="loginForm.smsCaptcha" class="input" placeholder="验证码" tabindex="2" @keyup.enter="handleLogin">
          <template #suffix>
            <el-button v-if="smsCaptchaSecond === 0" type="text" @click="getsmsCaptcha">获取验证码</el-button>
            <span v-else>{{ smsCaptchaSecond }}s重新获取</span>
          </template>
        </el-input>
      </el-form-item>
    </div>
    <el-button :loading="loading" type="primary" style="width: 100%; height: 50px; font-size: 18px; margin-top: 59px;" @click.prevent="handleLogin">登 录</el-button>
    <div class="more-problem">更多账号密码问题请联系客服:13758257847</div>
  </el-form>
  <div style="margin-top: 20px; color: #666; font-size: 14px; text-align: center; font-weight: bold;">
    <span style="margin-right: 5px;">演示帐号一键登录：</span>
    <el-button type="danger" size="mini" @click="testmobile('12000000001')">admin</el-button>
    <el-button type="danger" size="mini" plain @click="testmobile('13017612011')">test</el-button>
  </div>
</template>

<script>
import { defineComponent, reactive, onUnmounted, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'

import { initTCaptcha } from '@/util/loadJS'
import api from '@/api'
import APIURL from '@/api/urls'
export default defineComponent({
  name: 'SmsCaptcha',
  setup() {
    const router = useRouter()
    const store = useStore()
    const loginFormRef = ref(null)
    const staticState = {
      smsCaptchaInterval: null,
      redirect: undefined
    }
    const dataMap = reactive({
      smsCaptchaSecond: 0,
      loading: false,
      // 表单类型，login 登录，reset 重置密码
      loginForm: {
        mobile: localStorage.login_mobile || '',
        smsCaptcha: '',
        clientType: 5
      },
      loginRules: {
        mobile: [
          { required: true, trigger: 'blur', message: '请输入手机号' },
          { min: 11, max: 11, trigger: 'blur', message: '请输入正确的手机号' }
        ],
        smsCaptcha: [
          { required: true, trigger: 'blur', message: '请输入验证码' },
          { min: 4, max: 6, trigger: 'blur', message: '验证码长度为4位' }
        ]
      }
    })

    // 引入腾讯云sdk
    initTCaptcha()
    onUnmounted(() => {
      clearInterval(staticState.smsCaptchaInterval)
      dataMap.smsCaptchaSecond = 0
      staticState.smsCaptchaInterval = null
    })
    watch(
      () => useRoute(),
      route => {
        staticState.redirect = route.query && route.query.redirect
      },
      {
        immediate: true
      }
    )
    /**
     * 获取验证码
     * 调用时机：点击获取验证码
     */
    function getsmsCaptcha() {
      loginFormRef.value.validateField('mobile', errorMessage => {
        if (!errorMessage) {
          if (dataMap.smsCaptchaSecond === 0) {
            dataMap.smsCaptchaSecond = 60
            staticState.smsCaptchaInterval = setInterval(() => {
              dataMap.smsCaptchaSecond--
              if (dataMap.smsCaptchaSecond === 0) {
                clearInterval(staticState.smsCaptchaInterval)
                staticState.smsCaptchaInterval = null
              }
            }, 1000)
          }
        } else {
          ElMessage.error('请输入正确的手机号')
        }
      })
    }
    /**
     * 调用登录接口
     * 调用时机：点击登录
     */
    function handleLogin() {
      loginFormRef.value.validate(async valid => {
        if (valid) {
          dataMap.loading = true
          try {
            const res = await api.get(APIURL.getMobileLogin, {
              params: dataMap.loginForm
            })
            console.log(res)
          } catch (error) {
            console.log(error)
          }
          store
            .dispatch('user/login', dataMap.loginForm)
            .then(() => {
              dataMap.loading = false
              localStorage.removeItem('login_mobile')
              router.push({ path: staticState.redirect || '/' })
            })
            .catch(() => {
              dataMap.loading = false
            })
        }
      })
    }
    function testmobile(mobile) {
      dataMap.loginForm.mobile = mobile
      dataMap.loginForm.smsCaptcha = '123456'
      handleLogin()
    }

    function handelTabClick() {
      wxloginRef.value.handelTabClick(activeName)
    }

    // 创建腾讯云验证 传入回调
    function createCaptcha(cb, faii) {
      let captcha1 = new window.TencentCaptcha(store.state.tencent.captchaAppId, res => {
        if (res.ret === 0) {
          // 成功 处理回调
          res.mobile = api.get(APIURL.onCheckCaptcha, res).then(reason => {
            console.log(reason)

            cb && cb(res)
          })
        } else if (res.ret === 2) {
          // 失败
          faii && faii()
        }
      })
      captcha1.show()
    }

    return {
      ...toRefs(dataMap),
      getsmsCaptcha,
      loginFormRef,
      testmobile,
      handleLogin
    }
  }
})
</script>

<style lang="scss">
.login-form {
  padding: 40px 70px;
  background-color: #fff;
  .input .el-input__inner {
    border: none;
    padding-left: 0;
    border-radius: 0;
    border-bottom: 2px solid #e9eaeb;
  }
  .title-container {
    position: relative;
  }
}
.more-problem {
  text-align: center;
  font-size: 14px;
  margin-top: 45px;
}
</style>
