const PATHS = require('./webpack-paths.js');
const merge = require('webpack-merge');
const common = require('./webpack.common-app.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: PATHS.appProd,
        filename: '[name].bundle.min.js'
    },
    module: {
        // rules: [{
        //     test: /\.js?$/,
        //     exclude: /node_modules/,
        //     use: {
        //     }
        // }]
    }
});
