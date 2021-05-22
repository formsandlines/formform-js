const path = require('path');

module.exports = {
    libSrc: path.resolve(__dirname,'./src/lib') + '/main.js',
    libDev: path.resolve(__dirname, 'dist'),
    libProd: path.resolve(__dirname, 'dist')
};