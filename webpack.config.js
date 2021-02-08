const path = require('path');
const VueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin')
const stylePostLoader = require('./node_modules/vue-loader/lib/loaders/stylePostLoader')
const config = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader'
            }]
        },
        {
            test:/\.js$/,
            loader:'babel-loader'
        },
        {
            test:/\.css$/,
            use:[
                'vue-style-loader',
                'css-loader'
            ]
        }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
module.exports = config;