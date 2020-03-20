module.exports = {
  publicPath: '/',
  outputDir: '../dist/web',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/mixins.scss";`,
      },
    },
  },
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
};
