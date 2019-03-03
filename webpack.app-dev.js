const PATHS = require('./webpack-paths.js');
const merge = require('webpack-merge');
const common = require('./webpack.common-app.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: PATHS.appDev,
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
