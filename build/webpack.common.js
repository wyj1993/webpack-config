
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const devConfig = require("./webpack.dev")
const prodConfig = require("./webpack.pro")
const merge = require("webpack-merge")
const commonConfig = {
  entry: {
    index:'./index',
    // lodash:"./lodash"
  },
  output: {
    path: path.resolve(__dirname, '../bundle'),
    filename: '[name].js'
  },
  module: {
    // 遇到不认识的来这里找loader
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: 'url-loader',
          options:{
            // name是打包前的文件名称，ext是打包前的文件格式
            name:'[name]_[hash].[ext]',
            outputPath:'img/',
            limit: 2048
          }
        }
      },
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
      },
      {
        test:/\.scss$/,
        use:['css-loader','sass-loader']
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
        }
      }
    ]
  },
    plugins:[new HtmlWebpackPlugin({
    template:'./index.html',
    title:"自己去的"
  }),
  // 每次打包前都先删除掉dist文件夹的文件
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  ]
}

module.exports = (env)=>{ 
  if(env && env.production)
  { 
    return merge(commonConfig,prodConfig) 
  }
  else{
    return merge(commonConfig,devConfig) 
  } 
}
