import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackPwaManifest from "webpack-pwa-manifest"
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import WorkboxPlugin from "workbox-webpack-plugin"
import pkgInfo from "./package.json"
import BundleAnalyzerPlugin from "webpack-bundle-analyzer"

const config: webpack.Configuration = {

	target: "node",

	module: {
		rules: [
			{ test: /\.(ts|tsx)?$/, loader: 'ts-loader' },
		]
	},

	plugins: [
		//@ts-ignore
		new CleanWebpackPlugin()
	],

	resolve: {
		extensions: ['.ts', '.js']
	}
};

export default config;