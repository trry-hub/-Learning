"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("@/utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VueTemplate =
/*#__PURE__*/
function () {
  function VueTemplate() {
    _classCallCheck(this, VueTemplate);
  }

  _createClass(VueTemplate, [{
    key: "baseTempalte",
    value: function baseTempalte() {
      // data 中的数据
      var templateData = {
        name: '123'
      }; // 方法

      var baseMethods = {
        onClick: function onClick() {
          console.log(123);
        }
      };
      var templateMethods = {};

      for (var key in baseMethods) {
        templateMethods[key] = baseMethods[key].toString();
      } // scss 字符串


      var scssTemplate = {
        '.header': {
          'text-align': 'center;'
        }
      }; // 模板字符串

      var templateStr = "<template>\n\t\t\t<div>\n\t\t\t\t<component>123</component>\n\t\t\t</div>\n\t\t</template>\n\t\t<script>\n\t\tdefault export {\n\t\t\tdata() {\n\t\t\t\treturn {\n\t\t\t\t\t".concat(JSON.stringify(templateData), "\n\t\t\t\t}\n\t\t\t},\n\t\t\tprops:{},\n\t\t\tmounted() {},\n\t\t\tmethods:{\n\t\t\t\t").concat(JSON.stringify(templateMethods), "\n\t\t\t},\n\t\t}\n\t\t</script>\n\t\t<style lang=\"scss\" scoped>\n\t\t// scss\n\t\t\t").concat(JSON.stringify(scssTemplate), "\n\t\t</style>\n\t\t"); // Vue.component('vue-template', {
      //     data: () => templateData,
      //     template: templateStr
      // })

      console.log(templateStr);
    }
  }]);

  return VueTemplate;
}();

exports["default"] = VueTemplate;