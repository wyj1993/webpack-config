
const webpack = require('webpack')
const merge = require('webpack-merge')
const devConfig= {
  mode:'development',
  devtool:'none',
  // tree-shaking 只使用有用的代码，减少打包体积，把没用的代码摇掉
  optimization: { 
    usedExports: true,
    // code spliting
    splitChunks:{
      chunks:"all"
    }
  },
  // 以外面的index.html为模板生成打包后的html
  plugins:[
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
module.exports = devConfig