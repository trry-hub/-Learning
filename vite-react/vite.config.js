import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()],
	resolve: {
		alias: {
			// 键必须以斜线开始和结束
			"@": path.resolve(__dirname, "./src"),
			// '/@components/': path.resolve(__dirname, './src/components')
		},
	},
	css: {
		modules: { scopeBehaviour: "global" },
	},
});
