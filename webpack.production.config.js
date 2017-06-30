var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: [
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
            loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-1'],
            include: path.join(__dirname, 'src')
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        packageAlias: 'browser'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
    	new webpack.optimize.DedupePlugin(),
	    new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        unused: true,
	        dead_code: true,
	        warnings: false
	      }
	    }),
	    new webpack.optimize.AggressiveMergingPlugin()
    ]
};
