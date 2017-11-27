/**
 * Created by Demo-Buttons on 2017/11/25.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
             test: /\.css$/, 
             loader: "style-loader!css-loader"
          },
         {
            test: /\.less$/, 
           loader: "style-loader!css-loader!less-loader"
          },
          { 
            test: /\.(woff|woff2|eot|ttf|otf)$/i, 
            loader: 'url-loader?limit=8192&name=[name].[ext]'
          },
        { 
          test: /\.(jpe?g|png|gif|svg)$/i, 
          loader: 'url-loader?limit=8192&name=[name].[ext]'
        }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};