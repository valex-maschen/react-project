const path = require('path');
const webpackConfig = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const postcssNesting = require('postcss-nested');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const filename = (ext) => (isDevelopment ? `[name].${ext}` : `[name].[hash].${ext}`);

const optimization = () => {
    const config = {
        runtimeChunk: isDevelopment,
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProduction) {
        config.minimizer = [new OptimizeCssAssetWebpackPlugin(), new TerserWebpackPlugin()];
    }

    return config;
};

const plugins = () => {
    return [
        new HtmlWebpackPlugin({
            template: '../public/index.html',
            minify: {
                collapseWhitespace: isProduction
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new webpackConfig.HashedModuleIdsPlugin({
            hashFunction: 'md4',
            hashDigest: 'base64',
            hashDigestLength: 4
        })
    ];
};

const cssLoaders = () => {
    return [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hrm: isDevelopment,
                reloadAll: true
            }
        },
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: {
                    localIdentName: isDevelopment ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]'
                }
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: () => [postcssNesting()]
            }
        }
    ];
};

const babelOptions = (...presets) => {
    const opts = {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
    };

    if (presets) {
        for (const preset of presets) {
            opts.presets.push(preset);
        }
    }

    return opts;
};

const jsLoaders = (...presets) => {
    const loaders = [
        'cache-loader',
        'thread-loader',
        {
            loader: 'babel-loader',
            options: babelOptions(...presets)
        }
    ];

    if (isDevelopment) {
        // loaders.push('eslint-loader');
    }

    return loaders;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.tsx']
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            // we use babel-loader to load our jsx and tsx files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: jsLoaders('@babel/preset-typescript')
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: jsLoaders('@babel/preset-react')
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: jsLoaders('@babel/preset-react', '@babel/preset-typescript')
            },
            {
                test: /\.module.css$/,
                use: cssLoaders()
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    },
    optimization: optimization(),
    devServer: {
        port: 8082,
        host: '0.0.0.0',
        clientLogLevel: 'warning',
        stats: 'errors-only',
        useLocalIp: true,
        hot: isDevelopment,
        inline: true,
        compress: true,
        overlay: true,
        disableHostCheck: true,
        historyApiFallback: true
    },
    devtool: isDevelopment ? 'source-map' : '',
    plugins: plugins()
};
