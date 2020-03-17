const fs = require('fs');

module.exports = {
  publicPath: process.env.BASE_URL || '/',
  outputDir: '../',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'index',
    },
    notfound: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: '404.html',
      title: '404',
    },
  },
  devServer: {
    open: false,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target:
          process.env.NODE_ENV === 'production'
            ? process.env.VUE_APP_API_HOST_PROD
            : process.env.VUE_APP_API_HOST_DEV,
        changeOrigin: true,
      },
    },
  },
};
