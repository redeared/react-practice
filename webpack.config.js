const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
    const isProduction = process.env.NODE_ENV ? process.env.NODE_ENV.trim() === 'production' : false;

    const config = {
        context: path.join(__dirname, 'src'),
        entry: './index',
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',

        resolve: {
            extensions: ['.js', '.jsx'],
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css/,
                    use: ExtractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'style-loader',
                    }),
                },
            ],
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: 'App',
                hash: true,
                template: './index.html',
            }),
            new ExtractTextPlugin('[name].css'),
        ],

        devServer: {
            contentBase: './dist',
        },
    };

    return config;
};
