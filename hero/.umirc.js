const path = require('path');
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'hero',
        dll: false,
        routes: {
          exclude: [
            //这里注释，有关系吗？
            /models\//
          ],
        },
        hardSource: false,
      },
    ],
  ],
  alias: {
    utils: path.resolve(__dirname, 'src/utils'),
    services: path.resolve(__dirname, 'src/services'),
    models: path.resolve(__dirname, 'src/models'),
  },
  // "proxy": {
  //   "/api": {
  //     "target": "https://pvp.qq.com/web201605/js/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api" : "" }
  //   }
  // }
};
