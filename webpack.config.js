const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const APP_MODE = process.env.npm_lifecycle_event;
var isProd = (APP_MODE === 'prod');


module.exports = {
    entry: ['babel-polyfill', './develop/app.js'],
    devtool: (isProd || APP_MODE == 'qa') ? 'source-map' : 'inline-source-map',
    output: {
        path: path.join(__dirname, '/public/static/build/'),
        filename: isProd ? 'app.[hash].js' : 'app.js',
        publicPath: 'static/build/',
    },
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    module: {
        rules: [
            { test: /\.jsx$/, use: 'babel', exclude: [/node_modules/, /public/] },
            { test: /\.js$/, use: 'babel', exclude: [/node_modules/, /public/] },
            { test: /\.css$/, use: ['style','css' ]},
            { test: /\.(sass|scss)/, use: ['style', 'css', 'resolve-url', 'sass?sourceMap']},
            { test: /\.gif$/, use: 'url?limit=16000&mimetype=image/gif' },
            { test: /\.jpg$/, use: 'url?limit=16000&mimetype=image/jpg' },
            { test: /\.png$/, use: 'url?limit=16000&mimetype=image/png' },
            { test: /\.svg/, use: 'url?limit=50000&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot|otf)/, use: 'url?limit=1' },
            {test: /\.html$/, use: 'html?attrs[]=video:src'}

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../../index.html',
            template: 'develop/index.html',
            inject: 'body'
        })
        , new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'isProd': JSON.stringify(isProd)
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: isProd ? 'vendors.[hash].js' : 'vendors.js',
            minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),
    ],
    devServer: {
        inline: true,
        host: '0.0.0.0',
        port: 8080,
        contentBase: './public',
    },
};
