const path = require('path');
const VueLoaderPlugin  = require('./node_modules/vue-loader/lib/plugin')
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
            use: [
                {
                    loader: 'vue-loader',
                }
            ]
        }]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
};
module.exports = config;