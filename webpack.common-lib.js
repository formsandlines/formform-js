const PATHS = require('./webpack-paths.js');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: {
        formform: PATHS.libSrc
    },
    externals: {
        d3: 'd3'
    }
});