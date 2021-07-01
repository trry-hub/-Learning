<template>
    <div v-loading="loading">
        <el-form ref="form" :model="form" :rules="rules" label-width="120px" label-suffix="：">
            <el-form-item label="名称" prop="title">
                <el-input v-model="form.title" placeholder="请输入名称" />
            </el-form-item>
            <el-form-item label="发货地址" prop="address">
                <cascader-area v-model="form.address" />
            </el-form-item>
            <el-form-item label="计价方式">
                <el-radio-group v-model="form.type">
                    <el-radio-button :label="1">按件数</el-radio-button>
                    <el-radio-button :label="2">按重量</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="运费模版">
                <div class="freight">
                    <el-card shadow="never">
                        <div slot="header">默认运费</div>
                        <el-row :gutter="20">
                            <el-col :md="6">
                                <el-input v-model="form.first_step" size="small">
                                    <template slot="prepend">{{ form.type == 1 ? '首件' : '首重' }}</template>
                                    <template slot="append">{{ form.type == 1 ? '件' : 'kg' }}</template>
                                </el-input>
                            </el-col>
                            <el-col :md="6">
                                <el-input v-model="form.first_price" size="small">
                                    <template slot="prepend">首费</template>
                                    <template slot="append">元</template>
                                </el-input>
                            </el-col>
                            <el-col :md="6">
                                <el-input v-model="form.continued_step" size="small">
                                    <template slot="prepend">{{ form.type == 1 ? '续件' : '续重' }}</template>
                                    <template slot="append">{{ form.type == 1 ? '件' : 'kg' }}</template>
                                </el-input>
                            </el-col>
                            <el-col :md="6">
                                <el-input v-model="form.continued_price" size="small">
                                    <template slot="prepend">续费</template>
                                    <template slot="append">元</template>
                                </el-input>
                            </el-col>
                        </el-row>
                    </el-card>
                    <el-row>
                        <el-col :span="24">
                            <Freight :data="form.infos" :type="form.type" />
                        </el-col>
                    </el-row>
                </div>
            </el-form-item>
            <el-form-item label="是否启用">
                <el-radio-group v-model="form.status">
                    <el-radio-button :label="true">启用</el-radio-button>
                    <el-radio-button :label="false">停用</el-radio-button>
                </el-radio-group>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Freight from '../Freight/index'

export default {
    components: {
        Freight
    },
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
                title: '',
                address: [],
                type: 1,
                status: true,
                first_step: '',
                first_price: '',
                continued_step: '',
                continued_price: '',
                infos: []
            },
            rules: {
                title: [
                    { required: true, message: '请输入名称', trigger: 'blur' }
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
            this.$api.get('mock/pages_example/shop/delivery/detail', {
                params: {
                    id: this.form.id
                }
            }).then(res => {
                this.loading = false
                Object.assign(this.form, res.data)
                // this.form.title = res.data.title
            })
        },
        submit(callback) {
            if (this.form.id == '') {
                this.$refs['form'].validate(valid => {
                    if (valid) {
                        this.$api.post('mock/pages_example/shop/delivery/create', this.form).then(() => {
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
                        this.$api.post('mock/pages_example/shop/delivery/edit', this.form).then(() => {
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
.freight {
    line-height: initial;
    ::v-deep .el-card {
        line-height: initial;
        margin-bottom: 10px;
        .el-input__inner {
            text-align: center;
        }
    }
}
</style>
