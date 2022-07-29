import { defineConfig } from 'vite'
import {resolve} from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import lessToJS from 'less-vars-to-js'
import svgSpritePlugin from 'vite-plugin-svg-sprite-component'

const fs = require('fs')
const themeVariables = lessToJS(
	fs.readFileSync(resolve(__dirname, './config/variables.less'), 'utf8')
)

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: '/src/assets',
	plugins: [
		reactRefresh(),
		vitePluginImp({
			libList: [
				{
					libName: 'antd',
					style: (name) => `antd/lib/${name}/style/index.less`
				}
			]
		}),
		svgSpritePlugin({ symbolId: (name) => 'icon-' + name })
	],
	resolve: {
		alias: {
			// 键必须以斜线开始和结束
			'@': resolve(__dirname, './src'),
			'~': resolve(__dirname, './') // 根路径
			// '/@components/': resolve(__dirname, './src/components')
		}
	},
	css: {
		preprocessorOptions: {
			less: {
				// 支持内联 JavaScript
				javascriptEnabled: true,
				// 重写 less 变量，定制样式
				modifyVars: themeVariables
			}
		},
		cssPreprocessOptions: {
			scss: {
				additionalData: '@import "./src/assets/styles/variables.scss";' // 添加公共样式
			}
		}
	},
	server: {
		port: 3000, // 开发环境启动的端口
		host: '0.0.0.0',
		proxy: {
			'/api': {
				// 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了新蜂商城的请求地址
				target: 'http://47.99.134.126:28019/api/v1',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '') // 将 /api 重写为空
			}
		}
	}
})
