const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'none',
    entry: {
        formform: './src/lib/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'formform',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    // devtool: 'source-map',
    externals: {
        d3: 'd3'
    }
});