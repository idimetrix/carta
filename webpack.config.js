require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const package = require('./package.json');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');

module.exports = {
	context: sourcePath,
	entry: {
		app: ['@babel/polyfill', './index.tsx'],
	},
	output: {
		path: outPath,
		publicPath: isProduction ? '/' : '/',
		filename: isProduction ? '[contenthash].js' : '[hash].js',
		chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].[hash].js',
	},
	target: 'web',
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		mainFields: ['module', 'browser', 'main'],
		alias: {
			'~': path.resolve(__dirname, 'src'),
			'~/': path.resolve(__dirname, 'src'),
			'react-dom': '@hot-loader/react-dom',
		},
	},
	module: {
		rules: [
			{
				test: /\.(j|t)s(x)?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						babelrc: false,
						presets: [['@babel/preset-env', { targets: { browsers: '> 0.1%' } }], '@babel/preset-typescript', '@babel/preset-react'],
						plugins: [
							// plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
							['@babel/plugin-proposal-decorators', { legacy: true }],
							['@babel/plugin-proposal-class-properties', { loose: true }],
							'react-hot-loader/babel',
						],
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						query: {
							sourceMap: !isProduction,
							importLoaders: 1,
							// modules: {
							//   localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]'
							// }
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('postcss-import')(),
								require('postcss-url')(),
								require('postcss-preset-env')({
									stage: 2,
								}),
								require('postcss-reporter')(),
								require('postcss-browser-reporter')({
									disabled: isProduction,
								}),
							],
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						query: {
							sourceMap: !isProduction,
							importLoaders: 1,
							// modules: {
							//   localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]'
							// }
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('postcss-import')(),
								require('postcss-url')(),
								require('postcss-preset-env')({
									stage: 2,
								}),
								require('postcss-reporter')(),
								require('postcss-browser-reporter')({
									disabled: isProduction,
								}),
							],
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(png|gif|jpg|jpeg)$/,
				use: [
					{
						loader: 'file-loader',
						options: { name: 'images/[name].[hash:6].[ext]', publicPath: '/' },
					},
				],
			},
			{
				test: /font.*\.(eot|ttf|woff|woff2|otf|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: { name: 'fonts/[name].[hash:6].[ext]', publicPath: '/' },
					},
				],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
			},
			{
				test: /\.html$/,
				use: 'html-loader',
			},
			// {
			// 	test: /\.(jpe?g|a?png|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
			// 	use: 'file-loader'
			// }
		],
	},
	optimization: {
		// minimizer: [
		// 	new UglifyJsPlugin({
		// 		uglifyOptions: {
		// 			compress: {
		// 				collapse_vars: false
		// 			}
		// 		}
		// 	})
		// ],
		// namedModules: false,
		// namedChunks: false,
		// nodeEnv: 'production',
		// flagIncludedChunks: true,
		// occurrenceOrder: true,
		// sideEffects: true,
		// usedExports: true,
		// concatenateModules: true,
		// noEmitOnErrors: true,
		// checkWasmTypes: true,
		// minimize: true,
		noEmitOnErrors: true,
		// splitChunks: {
		// 	name: true,
		// 	chunks: 'all',
		// 	cacheGroups: {
		// 		commons: {
		// 			chunks: 'initial',
		// 			minChunks: 2,
		// 		},
		// 		vendors: {
		// 			test: /[\\/]node_modules[\\/]/,
		// 			chunks: 'all',
		// 			filename: isProduction ? 'vendor.[contenthash].js' : 'vendor.[hash].js',
		// 			priority: -10,
		// 		},
		// 	},
		// },
		// runtimeChunk: true,
		minimizer: [
			new TerserPlugin({
				parallel: true,
			}),
			new OptimizeCssAssetsPlugin({}),
		],
	},
	plugins: [
		new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
		new webpack.DefinePlugin({
			'process.env': Object.keys(process.env).reduce((env, key) => {
				env[key] = JSON.stringify(process.env[key]);
				return env;
			}, {}),
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[hash].css',
			disable: !isProduction,
		}),
		new ImageMinPlugin({ test: /\.(jpg|jpeg|png|gif)$/i }),
		new HtmlWebpackPlugin({
			template: '../public/index.html',
			minify: {
				minifyJS: true,
				minifyCSS: true,
				removeComments: true,
				useShortDoctype: true,
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
			},
			meta: {
				title: package.name,
				description: package.description,
				keywords: Array.isArray(package.keywords) ? package.keywords.join(',') : undefined,
			},
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src', 'i18n', 'locales'),
					to: path.resolve(__dirname, isProduction ? 'build' : 'public', 'locales'),
					toType: 'dir',
				},
			],
		}),
	],
	devServer: {
		contentBase: sourcePath,
		port: 4000,
		hot: true,
		inline: true,
		historyApiFallback: {
			disableDotRule: true,
		},
		stats: 'minimal',
		clientLogLevel: 'warning',
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
			},
		},
	},
	devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
	node: {
		module: 'empty',
		dgram: 'empty',
		dns: 'mock',
		fs: 'empty',
		http2: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty',
	},
};
