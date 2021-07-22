<template>
    <div :class="isPageFullScrene?'screne':'normal'" class="wrap">
        <main ref="drag" class="drag">
            <div class="header">
                <el-form size="small">
                    <el-form-item>
                        <el-button @click="onCode">
                            <svg-icon class="button-icon" name="code" />Code
                        </el-button>
                        <el-button @click="onPreview">
                            <svg-icon class="button-icon" name="preview" />Preview
                        </el-button>
                        <el-button @click="onSave">
                            <svg-icon class="button-icon" name="save" />Save
                        </el-button>
                    </el-form-item>
                </el-form>
                <svg-icon class="screne-icon" :name="isPageFullScrene?'piece-shrink':'piece-enlarge'" @click="onEnlarge" />
            </div>
            <div class="piece">
                <section class="left">
                    <base-temp />
                </section>
                <section class="content">
                    <page-content ref="page-content" />
                </section>
                <section class="right">
                    <configer />
                </section>
            </div>
        </main>
        <el-dialog title="Code" :visible.sync="visible">
            <code-mirror v-if="visible" :value="code" />
            <el-button @click="onSubmit">提交</el-button>
            <el-button @click="onBuild">打包项目</el-button>
        </el-dialog>
    </div>
</template>

<script>
import VueTemplate from '/handlebars/template/vue'
export default {
    name: 'Piece',
    data() {
        return {
            isPageFullScrene: false,
            visible: false,
            code: ''
        }
    },
    computed: {
        pageDom() {
            return this.$refs.drag
        }
    },
    methods: {
        onSave() {
            this.$alert('保存成功！', 'title', {
                confirmButtonText: 'confirm',
                callback: action => {
                    console.log(action)

                }
            })
        },
        // 预览代码
        onCode() {
            try {
                const tem = new VueTemplate(this.$refs['page-content'].getList()[1])
                this.code = tem.initTempalte()

                this.visible = true
            } catch (error) {
                console.log(error)
            }
        },
        // 预览效果
        onPreview() {
            console.log('onPreview')
        },
        // 提交代码
        onSubmit() {
            const params = { code: this.code }
            this.$post('/api/createfile', params).then(res => {
                this.$message({
                    message: res.msg,
                    type: 'success'
                })
            })
        },
        // 打包项目
        onBuild() {
            this.$get('/api/createfile/project').then(res => {
                console.log(res)

            })
        },
        // 放大
        onEnlarge() {
            this.isPageFullScrene = !this.isPageFullScrene
        }
    }
}
</script>

<style scoped lang="scss">
// scss
.wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
}
.drag {
	flex: 1;
	display: flex;
	flex-direction: column;
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		top: 0;
		background-color: #fff;
		z-index: 100;
		.screne-icon {
			font-size: 22px;
			color: #ccc;
			transition: all 0.3s;
			&:hover {
				color: #333;
			}
		}
		.button-icon {
			margin-right: 5px;
		}
	}
	.piece {
		display: grid;
		grid-template-columns: 300px 1fr 300px;
		flex: 1;
		.left {
			padding: 5px;
			border: 1px solid #ddd;
		}
		.content {
			background-color: #f5f5f5;
		}
		.right {
			padding: 5px;
			border: 1px solid #ddd;
		}
	}
}
.screne {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 10;
	transition: all 0.3s;
	background-color: #fff;
	overflow-y: scroll;
	.drag {
		height: auto;
		overflow-y: scroll;
		.header {
			padding: 20px;
			padding-bottom: 5px;
		}
	}
}
</style>
