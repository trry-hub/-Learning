// import store from '@/store'
import { nanoid } from 'nanoid'

const componentsContext = require.context('./', true, /^((?!index).)*.js$/)

const arr = []
componentsContext.keys().forEach(file_name => {
    const componentConfig = componentsContext(file_name).default
    for (const key in componentConfig) {
        const item = componentConfig[key]
        const obj = {
            id: nanoid(),
            name: item.name,
            component: item
        }
        arr.push(obj)
    }
})
// store.commit('basecomponent/SETOTHERCOMPONENTS', arr)
