const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {test:/\.css$/,use: ['style-loader', 'css-loader']},
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/, 
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name:'assets/images/[name].[ext]'
                        }
                    }

        ]},
            {test:/\.scss$/,use:['style-loader', 'css-loader','sass-loader']}
        ]
    }
};