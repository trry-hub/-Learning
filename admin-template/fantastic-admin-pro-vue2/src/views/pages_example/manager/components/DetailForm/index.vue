<template>
    <div v-loading="loading">
        <el-form ref="form" :model="form" :rules="rules" label-width="120px" label-suffix="：">
            <el-form-item label="帐号" prop="account">
                <el-input v-model="form.account" placeholder="请输入帐号" />
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item label="手机号" prop="mobile">
                <el-input v-model="form.mobile" placeholder="请输入手机号" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: [Number, String],
            default: ''
        }
    },
    data() {
        return {
            loading: false,
            form: {
                id: this.id,
                account: '',
                name: '',
                mobile: ''
            },
            rules: {
                account: [
                    { required: true, message: '请输入帐号', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                mobile: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { validator: (rule, value, callback) => {
                        let params = {
                            key: 'mobile',
                            value: value
                        }
                        if (this.form.id != '') {
                            params.id = this.form.id
                        }
                        this.$api.get('mock/pages_example/manager/check', {
                            params: params
                        }).then(res => {
                            if (res.data.exist) {
                                callback(new Error('手机号已存在'))
                            } else {
                                callback()
                            }
                        })
                    }, trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        if (this.form.id != '') {
            this.getInfo()
        }
    },
    methods: {
        getInfo() {
            this.loading = true
            this.$api.get('mock/pages_example/manager/detail', {
                params: {
                    id: this.form.id
                }
            }).then(res => {
                this.loading = false
                this.form.account = res.data.account
                this.form.name = res.data.name
                this.form.mobile = res.data.mobile
            })
        },
        submit(callback) {
            if (this.form.id == '') {
                this.$refs['form'].validate(valid => {
                    if (valid) {
                        this.$api.post('mock/pages_example/manager/create', this.form).then(() => {
                            this.$message.success({
                                message: '模拟新增成功',
                                center: true
                            })
                            callback && callback()
                        })
                    }
                })
            } else {
                this.$refs['form'].validate(valid => {
                    if (valid) {
                        this.$api.post('mock/pages_example/manager/edit', this.form).then(() => {
                            this.$message.success({
                                message: '模拟编辑成功',
                                center: true
                            })
                            callback && callback()
                        })
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
// scss
</style>
