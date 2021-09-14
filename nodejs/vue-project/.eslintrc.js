// 官方文档 https://cn.eslint.org

module.exports = {
	root: true, // 告诉eslint这是根目录
	env: {
		// 环境变量
		browser: true,
		es6: true,
	},
	globals: {
		// 全局变量
		process: true,
		require: true,
	},
	extends: [
		"plugin:vue/strongly-recommended",
		"eslint:recommended",
	],
	parserOptions: {
		ecmaVersion: 2015,
		parser: "babel-eslint",
		sourceType: "module",
	},
	rules: {
		// 代码风格
		"block-spacing": [2, "always"], // 禁止或强制在代码块中开括号前和闭括号后有空格
		"brace-style": [
			// 强制在代码块中使用一致的大括号风格
			2,
			"1tbs",
			{
				allowSingleLine: true,
			},
		],
		"comma-dangle": [2, "never"], // 要求或禁止末尾逗号
		"comma-spacing": [
			// 强制在逗号前后使用一致的空格
			2,
			{
				before: false,
				after: true,
			},
		],
		"comma-style": [2, "last"], // 强制使用一致的逗号风格
		"computed-property-spacing": [2, "never"], // 强制在计算的属性的方括号中使用一致的空格
		indent: [
			// 强制使用一致的缩进
			2,
			2,
			{
				SwitchCase: 1,
			},
		],
		"key-spacing": [
			// 强制在对象字面量的属性中键和值之间使用一致的间距
			2,
			{
				beforeColon: false,
				afterColon: true,
			},
		],
		"keyword-spacing": [
			// 强制在关键字前后使用一致的空格
			2,
			{
				before: true,
				after: true,
			},
		],
		"linebreak-style": 0, // 强制使用一致的换行风格
		"multiline-ternary": [2, "always-multiline"], // 要求或禁止在三元操作数中间换行
		"no-multiple-empty-lines": [
			// 禁止出现多行空行
			2,
			{
				max: 1,
			},
		],
		"no-unneeded-ternary": [
			// 禁止可以在有更简单的可替代的表达式时使用三元操作符
			2,
			{
				defaultAssignment: false,
			},
		],
		quotes: [2, "single"], // 强制使用一致的反勾号、双引号或单引号
		semi: [2, "never"], // 要求或禁止使用分号代替 ASI
		"space-before-blocks": [2, "always"], // 强制在块之前使用一致的空格
		"space-before-function-paren": [2, "never"], // 强制在 function的左括号之前使用一致的空格
		"space-in-parens": [2, "never"], // 强制在圆括号内使用一致的空格
		"space-infix-ops": 2, // 要求操作符周围有空格
		"space-unary-ops": [
			// 强制在一元操作符前后使用一致的空格
			2,
			{
				words: true,
				nonwords: false,
			},
		],
		"spaced-comment": [
			// 强制在注释中 // 或 /* 使用一致的空格
			2,
			"always",
			{
				markers: [
					"global",
					"globals",
					"eslint",
					"eslint-disable",
					"*package",
					"!",
					",",
				],
			},
		],
		"switch-colon-spacing": [
			// 强制在 switch 的冒号左右有空格
			2,
			{
				after: true,
				before: false,
			},
		],
		// ES6
		"arrow-parens": [2, "as-needed"], // 要求箭头函数的参数使用圆括号
		"arrow-spacing": [
			// 强制箭头函数的箭头前后使用一致的空格
			2,
			{
				before: true,
				after: true,
			},
		],
		"no-var": 2,
		"prefer-const": [
			2,
			{
				destructuring: "any",
				ignoreReadBeforeAssign: false,
			},
		],
		"prefer-template": 2,
		// Vue - https://github.com/vuejs/eslint-plugin-vue
		"vue/html-indent": [2, 2],
		"vue/max-attributes-per-line": 0,
		"vue/require-default-prop": 0,
		"vue/singleline-html-element-content-newline": 0,
		"vue/attributes-order": 2,
		"vue/order-in-components": 2,
		"vue/this-in-template": 2,
		"vue/script-indent": [
			2,
			2,
			{
				switchCase: 1,
			},
		],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
};
