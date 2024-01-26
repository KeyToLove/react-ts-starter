// webpack dev 配置
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { launchEditorMiddleware } = require('react-dev-inspector/plugins/webpack')
// 合并公共配置,并添加开发环境配置
module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 5555, //
    compress: false, // gzip压缩,开发环境不开启,提升热更新速度
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public') //托管静态资源public文件夹
    },
    client: {
      overlay: false,
      logging: 'none'
    },
    setupMiddlewares: (middlewares) => {
      middlewares.unshift(launchEditorMiddleware)
      return middlewares
    }
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: false
    }) // 添加热更新插件
  ]
})
