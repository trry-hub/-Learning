import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './vite/plugins'
import { createProxy } from './vite/proxy'

const fs = require('fs')
const path = require('path')

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  // 全局 scss 资源
  const scssResources = []
  fs.readdirSync('src/assets/styles/resources').map(dirname => {
    if (fs.statSync(`src/assets/styles/resources/${dirname}`).isFile()) {
      scssResources.push(`@use "~/assets/styles/resources/${dirname}" as *;`)
    }
  })
  // css 精灵图相关
  fs.readdirSync('src/assets/sprites').map(dirname => {
    if (fs.statSync(`src/assets/sprites/${dirname}`).isDirectory()) {
      // css 精灵图生成的 scss 文件也需要放入全局 scss 资源
      scssResources.push(`@use "~/assets/sprites/_${dirname}.scss" as *;`)
    }
  })

  return defineConfig({
    // base: './',
    // 开发服务器选项 https://cn.vitejs.dev/config/#server-options
    server: {
      open: true,
      port: 9000,
      proxy: createProxy(env, command)
    },
    // 构建选项 https://cn.vitejs.dev/config/#server-fsserve-root
    build: {
      outDir: mode == 'production' ? 'dist' : `dist-${mode}`,
      sourcemap: env.VITE_BUILD_SOURCEMAP == 'true',
      terserOptions: {
        compress: {
          drop_console: env.VITE_BUILD_DROP_CONSOLE == 'true'
        }
      },
      rollupOptions: {
        output: {
          // 处理打包后无样式问题
          manualChunks(id) {
            if (id.includes('node_modules/')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: scssResources.join('')
        }
      }
    },
    plugins: createVitePlugins(env, command === 'build')
  })
}
