const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


//rules for each type of files
const rulesForJsAndJsx = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
}

const rulesForHtml = {
    test: /\.html$/,
    use: {
        loader: 'html-loader'
    }
}

const rulesForCssAndScss = {
    test: /\.(css|scss)$/,
    use: ['css-loader', 'style-loader', 'sass-loader']
}

const rulesForAssets = {
    test: /\.(png|svg|jpg|gif)$/,
    type: 'asset'
}


// rules for webpack
const rules = [
    rulesForJsAndJsx, 
    rulesForHtml, 
    rulesForCssAndScss, 
    rulesForAssets
]

//configuration for webpack
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
            rules
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './src/public/index.html' })
        ],
        devServer: {
            historyApiFallback: true
        }
    }
}