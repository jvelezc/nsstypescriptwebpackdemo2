const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        app: './src/main.ts'

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'appbundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'

    },
    devServer:
    {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module : 
    {
        rules: [
            { test: /\.ts$/ , use:'ts-loader'}
        ]

    }

};

module.exports = config;