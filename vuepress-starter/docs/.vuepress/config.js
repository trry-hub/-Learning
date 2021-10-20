
function genSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,//是否可折叠
            children: [ //文章目录，构建出来的网页会按照顺序链接
                '',
                'getting-started',
                'basic-config',
                'assets',
                'markdown',
                'using-vue',
                'custom-themes',
                'i18n',
                'deploy'
            ]
        }
    ]
}

module.exports = {
    title: 'trry-docs',
    description: 'this is a docs',
    base: "/docs/",
    // nav: [
    //     {
    //         text: 'Guide',
    //         link: '/guide/',
    //     },
    //     {
    //         text: 'Config Reference',
    //         link: projects
    //     },
    //     {
    //         text: 'Default Theme Config',
    //         link: projects
    //     }
    // ],
    // sidebar: {
    //     '/guide/': genSidebarConfig('指南')//设定侧边栏的函数，参数是名称
    // },
}