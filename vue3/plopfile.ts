module.exports = function (plop) {
    plop.setGenerator("page", require("./plop-template/page/prompt"));

    plop.setGenerator("component", require("./plop-template/component/prompt"));

    plop.setGenerator("store", require("./plop-template/store/prompt"));

    plop.setGenerator("page-module", require("./plop-template/page-module/prompt"));

    plop.setGenerator("directive",require("./plop-template/directive/prompt"));
};
