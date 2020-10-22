module.exports = {
  description: "创建页面模块（包含 list 列表页和 detail 编辑页）",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入模块名称",
      validate: (v) => {
        if (!v || v.trim === "") {
          return "模块名称不能为空";
        } else {
          return true;
        }
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: `src/views/${data.name}/list.vue`,
        templateFile: "plop-templates/page-module/list.hbs",
        data: {
          componentName: `${data.name} list`,
        },
      },
      {
        type: "add",
        path: `src/views/${data.name}/create.vue`,
        templateFile: "plop-templates/page-module/create.hbs",
        data: {
          name: `${data.name} detail`,
        },
      },
    ];
    return actions;
  },
};
