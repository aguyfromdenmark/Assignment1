var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'public') + '/js/index.js',
    output: {
        path: path.resolve(__dirname, 'public') + '/js/dist', //folder where js is bundled
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    module: {
        loaders: [
            {//regex looking for js files containing jsx or es2015 that will be converted to browser friendly js... might clash with non react stuff if we're not careful :-P
                test: /\.js$/, 
                include: path.resolve(__dirname, 'public'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};