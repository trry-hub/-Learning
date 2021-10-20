import vue from '@vitejs/plugin-vue'

import createRestart from './restart'
import createHtml from './html'
import createAutoImport from './auto-import'
import createComponents from './components'
import createSvgIcon from './svg-icon'
import createMock from './mock'
import createCompression from './compression'
import createSpritesmith from './spritesmith'
// import createElementPlus from './element-plus'
import createAliyunOss from './aliyun-oss'

export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue()]
    // vitePlugins.push(...createElementPlus())
    !isBuild && vitePlugins.push(createRestart())
    vitePlugins.push(createHtml(viteEnv, isBuild))
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createComponents())
    vitePlugins.push(createSvgIcon(isBuild))
    vitePlugins.push(createMock())
    isBuild && vitePlugins.push(...createCompression(viteEnv))
    vitePlugins.push(...createSpritesmith(isBuild))
    vitePlugins.push(createAliyunOss())
    return vitePlugins
}
