// vite.config.js
import { defineConfig } from 'vite';
import htmlInclude from 'vite-plugin-html-include';

export default defineConfig({
  plugins: [
    htmlInclude() //配置插件
  ],
  base: '/club-website/', //配置基础路径
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',  //vite编译时入口文件
        news: 'news.html' //vite编译时入口文件
      }
    }
  }
})