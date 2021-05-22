const PATHS = require('./webpack-paths.js');

module.exports = {
    entry: {
        formform: PATHS.libSrc
    },
    externals: {
        d3: 'd3'
    }
};