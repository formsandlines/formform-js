const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common-prod.js');

module.exports = merge(common, {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'app/js'),
        filename: '[name].bundle.js'
    }
});
