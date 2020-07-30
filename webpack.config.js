const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node modules/'
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: {
                            path: 'src/js/postcss.config.js'
                        } }
                    }, 
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/i, 
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: {
                            path: 'src/js/postcss.config.js'
                        } }
                    }, 
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
            },

    ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '[name].css'
        }),
      ],  
    devServer: {
        overlay: true
    },
    
}


