const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const NutUIResolver = require('@nutui/auto-import-resolver')

const BaseUrl = "https://hz-t3.matpool.com:27352"
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 开启 unplugin 插件，自动引入 NutUI 组件
      Components({
        resolvers: [NutUIResolver()],
      })
    ],
  },
  devServer: {
    proxy: {
      '/api': {
        target: BaseUrl,
        changeOrigin: true,
      }
    }
  }
})