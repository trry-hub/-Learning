const path = require('path')
const fs = require('fs')

function getFolder(path) {
    let components = [path]
    const files = fs.readdirSync(path)
    files.forEach(function(item) {
        let stat = fs.lstatSync(path + '/' + item)
        if (stat.isDirectory() === true && item != 'components') {
            components.push.apply(components, getFolder(path + '/' + item))
        }
    })
    return components
}

module.exports = {
    description: '创建标准模块（包含列表页&详情页）',
    prompts: [
        {
            type: 'list',
            name: 'path',
            message: '请选择模块创建目录',
            choices: getFolder('src/views')
        },
        {
            type: 'input',
            name: 'name',
            message: '请输入模块名',
            validate: v => {
                if (!v || v.trim === '') {
                    return '模块名不能为空'
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'cname',
            message: '请输入模块中文名称',
            default: '默认模块'
        }
    ],
    actions: data => {
        let relativePath = path.relative('src/views', data.path)
        const actions = [
            {
                type: 'add',
                path: `${data.path}/{{snakeCase name}}/list.vue`,
                templateFile: 'plop-templates/module/list.hbs',
                data: {
                    componentName: `${relativePath} ${data.name} list`
                }
            },
            {
                type: 'add',
                path: `${data.path}/{{snakeCase name}}/detail.vue`,
                templateFile: 'plop-templates/module/detail.hbs',
                data: {
                    componentName: `${relativePath} ${data.name} detail`
                }
            },
            {
                type: 'add',
                path: `${data.path}/{{snakeCase name}}/components/DetailForm/index.vue`,
                templateFile: 'plop-templates/module/form.hbs'
            },
            {
                type: 'add',
                path: `${data.path}/{{snakeCase name}}/components/FormDialog/index.vue`,
                templateFile: 'plop-templates/module/dialog.hbs'
            }
        ]
        return actions
    }
}
