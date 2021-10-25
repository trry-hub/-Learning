
function genSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,//是否可折叠
            children: [ //文章目录，构建出来的网页会按照顺序链接
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
    base: '/docs',
    // themeConfig: {
    //     // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    //     repo: 'https://github.com/Bliangjs',
    //     // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    //     // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    //     repoLabel: '查看源码',
    
    //     // 以下为可选的编辑链接选项
    
    //     // 假如你的文档仓库和项目本身不在一个仓库：
    //     docsRepo: 'vuejs/vitepress',
    //     // 假如文档不是放在仓库的根目录下：
    //     docsDir: 'docs',
    //     // 假如文档放在一个特定的分支下：
    //     docsBranch: 'master',
    //     // 默认是 false, 设置为 true 来启用
    //     editLinks: true,
    //     // 默认为 "Edit this page"
    //     editLinkText: '帮助我们改善此页面！',
    //     nav: [
    //         {text: 'Home', link: '/'},
    //         {text: 'Guide', link: '/'},
    //         {text: 'Home', link: '/'},
    //         {text: 'Home', link: '/'},
    //     ]
    //   }
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