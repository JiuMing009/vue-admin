const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/',
  outputDir: 'dists',// 输出文件目录
  assetsDir: "./static",//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  indexPath: './index.html',//指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  lintOnSave: true,
  transpileDependencies: [],
  productionSourceMap: false,
  // 选项...
  devServer: {
    open: true,      // 运行项目时，是否自动开启新窗口。
    host: 'localhost',
    port: 8080,  // 默认端口号。
    https: false,      // 如果开启就会以https开头。
    hotOnly: false,      //安装模块更好的兼容，不需要配置。
    proxy: {
      '/ee': {
        target: 'http://localhost:7002/',
        changeOrigin: true,
        pathRewrite: {
          '^/ee': ''
        }
      },
      '/bb': {
        target: 'http://localhost:8888/',
        changeOrigin: true,
        pathRewrite: {
          '^/bb': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    }
  },
}

