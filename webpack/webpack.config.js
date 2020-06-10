const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './src/app.js',
    mode: 'development',
    output : {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(sa|c|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]

            },
            {
                test: /\.handlebars/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name:'[name].[ext]',
                            outputPath: 'static/img/',
                            useRelativePath: true
                        }
                    }
                ]

            },
            {

                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                      progressive: true,
                      quality: 65
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                      enabled: true,
                    },
                    pngquant: {
                      quality: [0.65, 0.90],
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                      quality: 75
                    }
                  }
            }
        ]
    },


    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.handlebars',
            // minify:{
            //     collapseWhitespace: true,
            //     removeComments: true,
            //     removeRedundantAttributes: true,
            //     removeScriptTypeAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     useShortDoctype: true
            // }
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name]-styles.css'
        })

    ] 
}