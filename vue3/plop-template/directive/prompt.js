module.exports = {
    description: "创建指令",
    prompts: [
        {
            type: "list",
            name: "type",
            choices: ["directive","directiveGlobal"],
            message: "请输入指令类型",
            default: "directive",
        },
        {
            type: "input",
            name: "directiveName",
            message: "请输入指令名",
        },
    ],
    actions: (data) => {
        const path = `directive/${
            data.type === "directive"
                ? data.directiveName
                : "global/" + data.directiveName
            }`;
        const actions = [
            {
                type: "add",
                path: `src/${path}/${data.directiveName}.js`,
                templateFile: "plop-templates/directive/js.hbs",
                data: {
                    name: data.name,
                }
            }
        ];
        return actions;
    },
};
