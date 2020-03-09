const webpack = require('webpack');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		"./src/index.js"
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.(css)$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', 'jsx']
	},
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: "./dist",
		port: 3000,
		hot: true
	}
}