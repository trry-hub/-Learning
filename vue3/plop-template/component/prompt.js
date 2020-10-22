module.exports = {
  description: "创建组件",
  prompts: [
    {
      type: "list",
      name: "type",
      choices: ["component","componentGlobal"],
      message: "请输入组件类型",
      default: "component",
    },
    {
      type: "input",
      name: "componentName",
      message: "请输入组件名",
      validate: (v) => {
        if (!v || v.trim === "") {
          return "组件名称不能为空";
        } else {
          return true;
        }
      },
    },
  ],
  actions: (data) => {
    const path = `components/${
      data.type === "component"
        ? data.componentName
        :  + data.componentName
      }`;
    const actions = [
      {
        type: "add",
        path: `src/${path}/index.vue`,
        templateFile: "plop-templates/component/index.hbs",
        data: {
          name: data.name,
        },
      },
      {
        type: "add",
        path: `src/${path}/index.js`,
        templateFile: "plop-templates/component/js.hbs",
        data: {
          name: data.name,
        },
      },
    ];
    return actions;
  },
};
