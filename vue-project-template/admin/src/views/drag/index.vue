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
            <component :is="name" />
            <div class="piece">
                <section class="left">
                    <base-temp />
                </section>
                <section class="content">
                    <page-content />
                </section>
                <section class="right">
                    <configer />
                </section>
            </div>
        </main>
    </div>
</template>

<script>
import VueTemplate from '/handlebars/template/vue'
export default {
    name: 'Piece',
    data() {
        return {
            isPageFullScrene: false,
            name: ''
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
            const tem = new VueTemplate().baseTempalte()
            this.code = tem
        },
        // 预览效果
        onPreview() {
            console.log('onPreview')
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
	overflow-y: scroll;
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
			// color: #333;
			margin-right: 5px;
		}
	}
	.piece {
		display: grid;
		grid-template-columns: 300px 1fr 300px;
		border: 1px solid #ff6700;
		.left {
			box-shadow: 0 4px 5px 1px rgba(234, 236, 240, 50%);
		}
		.content {
			background-color: #f5f5f5;
		}
		.right {
			box-shadow: 0 4px 5px 1px rgba(234, 236, 240, 50%);
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
		.header {
			padding: 20px;
			padding-bottom: 5px;
		}
	}
}
</style>
