
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'hero',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  "proxy": {
    "/api": {
      "target": "https://pvp.qq.com/web201605/js/",
      "changeOrigin": false,
      "pathRewrite": { "^/api" : "" }
    }
  }
}
