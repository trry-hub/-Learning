<template>
    <div>
        <el-dialog :visible.sync="myVisible" :title="id == '' ? '新增管理员' : '编辑管理员'" width="600px" :close-on-click-modal="false" append-to-body destroy-on-close>
            <DetailForm v-if="myVisible" ref="form" v-bind="$props" />
            <div slot="footer">
                <el-button @click="onCancel">取 消</el-button>
                <el-button type="primary" @click="onSubmit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import DetailForm from '../DetailForm/index'

export default {
    components: {
        DetailForm
    },
    props: {
        ...DetailForm.props,
        visible: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        myVisible: {
            get: function() {
                return this.visible
            },
            set: function(val) {
                this.$emit('update:visible', val)
            }
        }
    },
    methods: {
        onSubmit() {
            // submit() 为组件内部方法
            this.$refs['form'].submit(() => {
                this.$emit('success')
                this.onCancel()
            })
        },
        onCancel() {
            this.myVisible = false
        }
    }
}
</script>
