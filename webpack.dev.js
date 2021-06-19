const PATHS = require('./webpack-paths.js');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        formform: PATHS.libSrc
    },
    output: {
        path: PATHS.libDev,
        filename: '[name].js',
        library: 'formform',
        libraryExport: 'default',
        libraryTarget: 'umd'
    }
};