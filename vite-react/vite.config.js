import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		reactRefresh(),
		vitePluginImp({
			libList: [
				{
					libName: "antd",
					style: (name) => `antd/es/${name}/style`,
				},
			],
		}),
	],
	resolve: {
		alias: {
			// 键必须以斜线开始和结束
			"@": path.resolve(__dirname, "./src"),
			// '/@components/': path.resolve(__dirname, './src/components')
		},
	},
	css: {
		modules: { scopeBehaviour: "global" },
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	cssPreprocessOptions: {
		lessLoaderOptions: {
			lessOptions: {
				modifyVars: { "@primary-color": "#1DA57A" },
				javascriptEnabled: true,
			},
		},
	},
});
