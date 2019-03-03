const PATHS = require('./webpack-paths.js');
const merge = require('webpack-merge');
const common = require('./webpack.common-lib.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: PATHS.libDev,
        filename: '[name].js',
        library: 'formform',
        libraryExport: 'default',
        libraryTarget: 'umd'
    }
});