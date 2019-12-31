
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
module.exports = {
  mode:'production',
  entry: './index',
  output: {
    path: path.resolve(__dirname, './bundle'),
    filename: 'index.js'
  },
  // devtool:'cheap-module-eval-source-map',
  devtool:'none',
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
  // tree-shaking 只使用有用的代码，减少打包体积，把没用的代码摇掉
  optimization: { usedExports: true },
  // 以外面的index.html为模板生成打包后的html
  plugins:[new HtmlWebpackPlugin({
    template:'./index.html',
    title:"自己去的"
  }),
  // 每次打包前都先删除掉dist文件夹的文件
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    contentBase:'./dist',
    open:true,
    port:"8081",
    hot:true,
    hotOnly:true,
    // proxy:{
    //   '/api':{
    //     target:'http://localhost:9092'
    //   }
    // }
  }
  // 提取css
}