<template>
    <div class="header">
        <div>
            <div class="title">{{ title }}</div>
            <div class="content">
                <slot name="content">{{ content }}</slot>
            </div>
        </div>
        <div>
            <slot>
                <el-button type="text" @click="$router.back()"><span class="back-icon"><svg-icon name="back" /></span>返回上一页</el-button>
            </slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 16px 20px;
    background: #fff;
    border-bottom: 1px solid #e8eaec;
    .title {
        font-size: 22px;
    }
    button {
        display: flex;
        align-items: center;
        &:hover .back-icon {
            opacity: 0.8;
        }
        &:active .back-icon {
            opacity: 1;
        }
    }
    .back-icon {
        font-size: 20px;
        margin-right: 5px;
        color: var(--el-color-primary);
    }
    .content {
        color: #909399;
        font-size: 14px;
        margin-top: 10px;
        &:empty {
            display: none;
        }
    }
}
</style>
