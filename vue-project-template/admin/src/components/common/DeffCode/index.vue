<template>
    <div class="differ-wrap">
        <el-scrollbar class="scroll">
            <code-diff class="diff" :old-string="oldVal" :is-show-no-change="true" output-format="side-by-side" :new-string="newVal" :context="1000" />
        </el-scrollbar>
    </div>
</template>

<script>
import CodeDiff from 'vue-code-diff'
export default {
    name: 'DeffCode',
    components: { CodeDiff },
    props: {
        newVal: {
            type: String,
            default: ''
        },
        oldVal: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
//scss
::v-deep .el-scrollbar__wrap {
	&::-webkit-scrollbar {
		// width: 4px;
		background-color: transparent;
		height: 0;
	}
}
.differ-wrap {
	height: 100%;
	border: 1px solid #ddd;
	overflow: hidden;
	.scroll {
		height: 100%;
	}
	#app {
		margin: 0 !important;
		padding: 0;
	}
	::v-deep .diff {
		line-height: 16px;
		.d2h-code-linenumber,
		.d2h-code-side-linenumber {
			position: sticky;
			left: 0;
		}
		.d2h-file-collapse,
		.d2h-file-wrapper {
			border: none;
			margin-bottom: 0;
		}
		.d2h-file-side-diff {
			margin-right: 0;
		}
		.d2h-code-side-line{
			padding: 0;
		}
	}
}
</style>