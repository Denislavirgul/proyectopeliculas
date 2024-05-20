const path = require('path');

module.exports = {
    entry: './src/registro.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    resolve: {
        alias: {
            '@popperjs/core': path.resolve(__dirname, 'node_modules/@popperjs/core'),
        },
    },
};
