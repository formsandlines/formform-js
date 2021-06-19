const PATHS = require('./webpack-paths.js');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        formform: PATHS.libSrc
    },
    output: {
        path: PATHS.libProd,
        filename: '[name].min.js',
        library: 'formform',
        libraryExport: 'default',
        libraryTarget: 'umd'
    }
};