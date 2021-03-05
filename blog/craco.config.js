/* craco.config.js */
const fs = require("fs");
const path = require("path");
const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
	style: {
		//修改样式配置
	},
	eslint: {
		// 修改eslint配置，同.eslintrc
		env: {
			browser: true,
			commonjs: true,
			es6: true,
		},
		parser: "babel-eslint",
		rules: {
			"no-cond-assign": 2,
			"no-extend-native": 0,
			"no-unused-vars": 0,
		},
	},
	babel: {
		//babel配置，同.babelrc
	},
	plugins: [
		//注入插件
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							"@primary-color": "#428BCA",
						},
						javascriptEnabled: true,
					},
				},
			},
		},
		{ plugin: CracoAntDesignPlugin },
	],
	webpack: {
		alias: {
			"@": path.resolve("src"),
		},
		module: {
			rules: [
				{
					oneOf: [
						{
							test: /\.(eot|woff2?|ttf|svg)$/,
							exclude: path.resolve(__dirname, "../src/assets"), //不处理指定svg的文件(所有使用的svg文件放到该文件夹下)
							use: [
								{
									loader: "url-loader",
									options: {
										name: "[name]-[hash:5].min.[ext]",
										limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
										outputPath: "font",
										publicPath: "font",
									},
								},
							],
						},
						{
							test: /\.svg$/,
							loader: "svg-sprite-loader",
							include: path.resolve(__dirname, "../src/assets"), //只处理指定svg的文件(所有使用的svg文件放到该文件夹下)
							options: {
								symbolId: "icon-[name]", //symbolId和use使用的名称对应      <use xlinkHref={"#icon-" + iconClass} />
							},
						},
						{
							loader: require.resolve("file-loader"),
							// Exclude `js` files to keep "css" loader working as it injects
							// its runtime that would otherwise be processed through "file" loader.
							// Also exclude `html` and `json` extensions so they get processed
							// by webpacks internal loaders.
							exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
							options: {
								name: "static/media/[name].[hash:8].[ext]",
							},
						},
					],
				},
			],
		},
		plugins: {
			add: [
				{
					test: /\.(eot|woff2?|ttf|svg)$/,
					exclude: path.resolve(__dirname, "../src/assets"), //不处理指定svg的文件(所有使用的svg文件放到该文件夹下)
					use: [
						{
							loader: "url-loader",
							options: {
								name: "[name]-[hash:5].min.[ext]",
								limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
								outputPath: "font",
								publicPath: "font",
							},
						},
					],
				},
				{
					test: /\.svg$/,
					loader: "svg-sprite-loader",
					include: path.resolve(__dirname, "../src/assets"), //只处理指定svg的文件(所有使用的svg文件放到该文件夹下)
					options: {
						symbolId: "icon-[name]", //symbolId和use使用的名称对应      <use xlinkHref={"#icon-" + iconClass} />
					},
				},
			] /* An array of plugins */,
			remove: [] /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */,
		},
		configure: {
			/* Any webpack configuration options: https://webpack.js.org/configuration */
		},
		configure: (webpackConfig, { env, paths }) => {
			return webpackConfig;
		},
	},
	devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
		// 修改devServer配置
		return devServerConfig;
	},
};
