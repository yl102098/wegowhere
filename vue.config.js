// module.exports = {
//     configureWebpack: {
//       resolve: {
//         alias: {
//           //添加vue别名
//           'vue$': 'vue/dist/vue.esm.js'
//         }
//       },
//       devServer: {
//         proxy: {
//           '/api/index/json': {
//             target: 'http://www.bjlink32.com/data9.php',
//             ws: true,
//             changeOrigin: true,
//             pathRewrite: {
//               '^/data9': ''
//             }
//           }, 
//         }
//       },
//     },
//   }

module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/mock'
          }
        }
      }
    }
  }
  // module.exports = {
  //   devServer: {
  //     proxy: {
  //       '/api': {
  //         target: 'http://localhost:80',
  //         changeOrigin: true,
  //       }
  //     }
  //   }
  // }