var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, '../scripts/'),
        publicPath: '/scripts/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: [/node_modules/, /joi-browser/],
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-1'],
            include: path.join(__dirname, 'src')
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        packageAlias: 'browser'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
