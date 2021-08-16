import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},
  antd: {},
  proxy: {
    "/api/": {
      "target": "https://pvp.qq.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api/": "" }
    }
  }
});
