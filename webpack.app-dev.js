const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common-dev.js');

module.exports = merge(common, {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'app/js'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: './app',
        publicPath: '/js/',
        open: true,
        open: 'Chrome-dev',
        // port: 8080
    }
});
