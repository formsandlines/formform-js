const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    entry: {
        formform: './src/lib/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].dist.js',
        library: 'formform',
        libraryTarget: 'var'
    },
    devtool: 'source-map',
    externals: {
        d3: 'd3'
    }
});