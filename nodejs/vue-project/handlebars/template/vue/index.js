// import Vue from 'vue'
import { tempBeautify, json2str } from '@/utils'
export default class VueTemplate {
    constructor(options) {
        this._options = options || {
            componentName: '',
            data: {},
            props: {},
            mounted() {},
            methods: {}
        }

        console.log(this._options)
    }
    // 初始化生成模板
    initTempalte() {
        const { data, props } = this._options
        // data 中的数据
        const templateData = data
        const templateProps = props

        const JS = `<script>
		export default {
			name: 'Demo',
			props:${JSON.stringify(templateProps)},
			data() {
				return ${json2str(templateData)}
			},
			mounted() {},
			methods:{${this._unescape(this._formatMethodsTemp())}},
		}
		</script>`

        // const CSS = `
        // <style lang="scss" scoped>
        // // scss
        // 	${this.getCssTemp()}
        // </style>
        // `
        //  + CSS
        return tempBeautify(this.getHtmlTemp() + JS)
    }
    // 整理html模板
    getHtmlTemp() {
        const { componentName, dataTotag, data } = this._options
        let dataTagStr = ''
        for (const key in dataTotag) {
            dataTagStr += `${key}="${dataTotag[key]}" `
        }

        // 组装组件标签
        const comp = `<${componentName} ${dataTagStr}>
		</${componentName}>`

        const HTML = `<template>
			<div>
				这是测试的：{{ ${Object.keys(data)} }}
				${componentName ? comp : ''}
			</div>
		</template>`
        return HTML
    }
    getCssTemp() {
        let str = ''
        // scss 字符串
        const scssTemplate = {
            '.header': {
                'text-align': 'center;'
            }
        }
        // 模板字符串
        str = JSON.stringify(scssTemplate)
            .toString()
            .slice(1, -1)
            .replace(/:/g, ' ')
        return str
    }
    // 消除字符串首位特殊字符
    _clearMarks(str) {
        if (str.slice(0, 1) === '"' || str.slice(0, 1) === '\'') {
            return str.slice(1, -1)
        }
        if (str.slice(-2, -1) === '"' || str.slice(-2, -1) === '\'') {
            return str.slice(1, -1)
        }
    }
    // 格式化方法字符串
    _formatMethodsTemp() {
        const { methods } = this._options
        // 方法
        const baseMethods = methods
        let templateMethods = ''
        for (const key in baseMethods) {
            const item = baseMethods[key].toString()
            if (item.slice(0, 8) === 'function') {
                templateMethods += `${item.slice(8, item.length)},`
            }
        }
        return templateMethods
    }
    _unescape(str) {
        return unescape(str.replace(/\\/g, '%'))
    }
}
