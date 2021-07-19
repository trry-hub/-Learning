// import Vue from 'vue'
export default class VueTemplate {
    baseTempalte() {
    // data 中的数据
        const templateData = {
            name: '123'
        }
        // 方法
        const baseMethods = {
            onClick() {
                console.log(123)
            }
        }
        const templateMethods = {}
        for (const key in baseMethods) {
            templateMethods[key] = baseMethods[key].toString()
        }

        // scss 字符串
        const scssTemplate = {
            '.header': {
                'text-align': 'center;'
            }
        }

        // 模板字符串
        const templateStr = `<template>
			<div>
				<component>123</component>
			</div>
		</template>
		<script>
		default export {
			data() {
				return {
					${JSON.stringify(templateData)}
				}
			},
			props:{},
			mounted() {},
			methods:{
				${JSON.stringify(templateMethods)}
			},
		}
		</script>
		<style lang="scss" scoped>
		// scss
			${JSON.stringify(scssTemplate)}
		</style>
		`

        // Vue.component('vue-template', {
        //     data: () => templateData,
        //     template: templateStr
        // })
        console.log(templateStr)
    }
}
