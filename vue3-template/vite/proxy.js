// 配置反向代理
export function createProxy(env, command) {
  return {
    '/qxs-api': { // 将www.exaple.com印射为/apis
      target: env.VITE_APP_API_BASEURL, // 接口域名
      changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY == 'true', // 是否跨域
      rewrite: path => path.replace(/\/qxs-api/, '/35/qxs-api')
    },
    '/api': { // 将www.exaple.com印射为/apis
      target: env.VITE_APP_API_BASEURL, // 接口域名
      changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY == 'true',
      rewrite: path => path.replace(/\/api/, '/')
    }
    // '/proxy': {
    //   target: env.VITE_APP_API_BASEURL,
    //   changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY == 'true',
    //   rewrite: path => path.replace(/\/proxy/, '')
    // }
  }
}
