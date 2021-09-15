<template>
    <div>
        <page-header title="多彩渐变卡片" content="ColorfulCard" />
        <page-main>
            <el-row :gutter="20">
                <el-col :md="6">
                    <ColorfulCard header="开发文档" :num="123" tip="较上周上升50%" icon="index-document" />
                </el-col>
                <el-col :md="6">
                    <ColorfulCard color-from="#fbaaa2" color-to="#fc5286" header="基础组件" :num="12323" tip="较上周上升50%" icon="index-component" />
                </el-col>
                <el-col :md="6">
                    <ColorfulCard color-from="#ff763b" color-to="#ffc480" header="扩展组件" :num="123" tip="较上周上升50%" icon="index-component" />
                </el-col>
                <el-col :md="6">
                    <ColorfulCard color-from="#6a8eff" color-to="#0e4cfd" header="业务应用页面" :num="123" tip="较上周上升50%" icon="index-page" />
                </el-col>
            </el-row>
        </page-main>
    </div>
</template>
