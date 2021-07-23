import element from 'element-ui'

const elementComponent = {}
const filterArr = ['version', 'i18n', 'install', 'locale']
for (const key in element) {
    if (!filterArr.includes(key)) {
        elementComponent[key] = element[key]
    }
}

// export default elementComponent
