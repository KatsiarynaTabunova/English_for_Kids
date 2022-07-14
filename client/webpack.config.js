const HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  //  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
    AutoPrefixer = require('autoprefixer'),
    CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './scripts/app.js',

    output: {
        filename: './scripts/app.js'
    },

    devServer: {
        port: 9999,
        hot: true,
        open: true
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.less', '.hbs', '.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    },
                    'eslint-loader'
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.hbs$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'handlebars-loader',
                        options: {
                            helperDirs: __dirname + '/scripts/helpers/handlebars'
                        }
                    }
                ]
            }
        ]
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "images", to: "images" },
                { from: "sounds", to: "sounds" }
            ]
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: {
                useShortDoctype: true,
                removeStyleLinkTypeAttributes: true,
                removeScriptTypeAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/app.css'
        })
    ]
};