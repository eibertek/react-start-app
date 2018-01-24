const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./', 'dist')
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",

                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve('./', "src"),
                ],

                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,

                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
            },
        ],
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
    devServer: {
        open: true, // to open the local server in browser
        contentBase: './dist',
    },
};