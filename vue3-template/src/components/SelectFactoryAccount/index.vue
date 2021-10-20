<!--
 * @Author: your name
 * @Date: 2020-12-17 16:35:28
 * @LastEditTime: 2021-01-07 15:01:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ksh-factory_vue/src/bizComponents/SelectFactoryAccount.vue
-->
<template>
  <el-dialog :visible="visible" :show-close="false" class="factory-modal" width="500px">
    <div class="title">选择您要登录的账号</div>
    <div class="list">
      <div v-for="item in factoryAccountList" :key="item.name" class="flex list-item vertical-center pointer" :class="{'active':item.current}" @click="onCheck(item)">
        <div class="flex-box">{{ item.topOrgName }}-{{ item.orgName }}-{{ item.name }}</div>
        <!-- <div class="flex flex-shrink list-item-radio level-center vertical-center">
					<i class="el-icon-check" v-if='item.current'></i>
				</div> -->
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="onSubmit">确认选择</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { getPersonToken } from '@/utils/auth'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SelectFactoryAccount',
  props: ['visible'],
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters(['factoryAccountList'])
  },
  methods: {
    ...mapActions(['getFactoryAccountList', 'onCheckFactoryAccount']),
    init() {
      this.loading = true
      let req = {
        personToken: getPersonToken()
      }
      this.getFactoryAccountList(req).then(res => {
        this.loading = false
      }, rea => {
        this.loading = false
      })
    },
    onClose() {
      this.$emit('onClose')
    },
    onCheck(item) {
      this.onCheckFactoryAccount(item)
    },
    onSubmit() {
      if (this.loading) return
      let checkItem = {}
      checkItem = this.factoryAccountList.filter(item => item.current)[0]
      if (!checkItem.id) return this.$message.error('请选择切换的账号')
      this.$emit('onSubmit', checkItem)
    }
  },
  watch: {
    visible(open) {
      if (open) {
        this.init()
      }
    }
  },
  mounted() {

  }
}
</script>
<style lang="stylus" scoped>
color-primary =  #198CFF
  .el-button
  width 150px
	.factory-modal >>> .el-dialog__header
		display none
	.factory-modal >>> .el-dialog__body
		padding 0
		max-height 380px
		display flex
		flex-direction column
	.factory-modal >>> .el-dialog__footer
		padding 30px 70px
		display flex
		justify-content center
	.title
		color #272E40
		font-size 24px
		flex-shrink 0
		padding 30px 40px 30px
	.list
		flex 1
		overflow-y auto
		padding 0 40px
	.list-item
		color #272E40
		font-size 14px
		padding 32px 0
		border-bottom 1px solid #E9EAEB
		&.active
			color color-primary
			.list-item-radio
				background color-primary
				border 0
	.list-item:last-child
  border-bottom none
  .list-item-radio
  margin-left 40px
  width 24px
  height 24px
  border-radius 50%
  border 1px solid #c5c5c5
  background #f8f8f8
  .list-item-radio >>> .el-icon-check
  color white;#198CFF.el-buttonwidth150px.factory-modal.el-dialog__headerdisplaynone.factory-modal.el-dialog__bodypadding0max-height380pxdisplayflexflex-directioncolumn.factory-modal.el-dialog__footerpadding30px70pxdisplayflexjustify-contentcenter.titlecolor#272E40font-size24pxflex-shrink0padding30px40px30px.listflex1overflow-yautopadding040px.list-itemcolor#272E40font-size14pxpadding32px0border-bottom1pxsolid#E9EAEB&.activecolorcolor-primary.list-item-radiobackgroundcolor-primaryborder0.list-item
</style>
