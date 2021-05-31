const path = require('path');
const { dependencies } = require('webpack');

module.exports = {
    entry: './assets/js/script.js',
    output: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
    mode: 'development'
};