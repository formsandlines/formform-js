const PATHS = require('./webpack-paths.js');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: PATHS.libProd,
        filename: '[name].min.js',
        library: 'formform',
        libraryExport: 'default',
        libraryTarget: 'umd'
    }
});