const fs = require('fs')

function getFolder(path) {
    let components = []
    const files = fs.readdirSync(path)
    files.forEach(function(item) {
        let stat = fs.lstatSync(path + '/' + item)
        if (stat.isDirectory() === true && item !== 'util') {
            components.push(path + '/' + item)
            // components.push.apply(components, getFolder(path + '/' + item))
        }
    })
    return components
}

module.exports = {
	description: "创建组件",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "请输入组件名称",
			validate: (v) => {
				if (!v || v.trim === "") {
					return "组件名称不能为空";
				} else {
					return true;
				}
			},
		},
		{
			type: "list",
			name: "url",
			choices: getFolder("src"),
			message: "请选择文件路径",
			loop: true,
		},
	],
    actions: (data) => {
        console.log(data);
        
		const actions = [
			{
				type: "add",
				path: "{{url}}/{{properCase name}}/index.jsx",
				templateFile: "plop-templates/component/index.hbs",
			},
			{
				type: "add",
				path: `{{url}}/{{properCase name}}/index.module.scss`,
				templateFile: "plop-templates/component/index.module.hbs",
			},
		];
		return actions;
	},
};
