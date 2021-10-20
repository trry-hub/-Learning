import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

export default function createElementPlus() {
  return [
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ]
    }),
    ElementPlus({
      useSource: true
    })
  ]
}
