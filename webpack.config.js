const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = (env, argv) => {
    const { mode } = argv;
    const isProduction = mode === 'production';
    
    return{
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
        },
        mode: 'development',
        resolve: {
            extensions: ['.js', '.jsx'],
            alias : {
                '@assets': path.resolve(__dirname, 'src/assets'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@pages': path.resolve(__dirname, 'src/pages')
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader'
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'style-loader',
                        'css-loader' 
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    type: 'asset'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './src/public/index.html' })
        ],
        devServer: {
            historyApiFallback: true
        }
    }
}