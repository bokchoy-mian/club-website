// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/club-website/',
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler',  // 使用现代API，消除 legacy-js-api 警告
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'if-function']  // 消除废弃警告
      }
    }
  }
})