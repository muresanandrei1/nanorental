module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    }
  },
  configureWebpack: {
    devServer: {
      proxy: {
        "/api/*": {
          target: "http://localhost:1337",
          secure: false,
          pathRewrite: { "^/api": "" }
        }
      }
    }
  }
};
