module.exports = {
    description: '创建组件',
    prompts: [
        {
            type: 'input',
            name: 'componentName',
            message: '请输入组件名',
            validate: v => {
                if (!v || v.trim === '') {
                    return '组件名称不能为空'
                } else {
                    return true
                }
            }
        }
    ],
    actions: data => {
        console.log(data)
        const path = `components/${data.componentName}`
        const actions = [
            {
                type: 'add',
                path: `src/${path}/index.vue`,
                templateFile: 'plop-template/components/index.hbs',
                data: {
                    name: data.name
                }
            }
        ]
        return actions
    }
}
