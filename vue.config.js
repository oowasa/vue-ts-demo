// import postcssPluginPx2rem from "postcss-plugin-px2rem";

module.exports = {
  publicPath: "/",
  devServer: {
    open: true
  },
  lintOnSave: true,
  chainWebpack: config => {
    config.module
      .rule("scss") // less 或者 scss都支持
      .oneOf("vue")
      .use("px2rem-loader")
      .loader("px2rem-loader")
      .before("postcss-loader") // this makes it work.
      .options({
        remUnit: 75,
        remPrecision: 8
      })
      .end();
  }
};
