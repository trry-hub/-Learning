// 深层合并对象
export class EXT {
    constructor(options) {
        this.options = options
        this.init(options)
    }
  // 默认配置项
  defaults = {
      // 是否深合并
      isDeep: true,
      // 是否遍历合并源对象原型链上的属性
      includePrototype: true,
      // 用于对每个合并项进行自定义修正
      forEach: function(target, name, sourceItem) {
          target[name] = sourceItem
          return target
      }
  }
  typeMap = {
      object: function() {
          return {}
      },
      array: function() {
          return []
      }
  }
  // 将配置项合并到默认配置项
  init(options) {
      for (const name in options) {
          this.defaults[name] = options[name]
      }
      return this
  }
  type(o) {
      return Object.prototype.toString.call(o).slice(8, -1).toLowerCase()
  }
  merge() {
      const self = this,
          _default = self.defaults,
          length = arguments.length,
          target = arguments[0] || {}
      let source = {},
          targetItem,
          sourceItem,
          tiType,
          siType,
          clone,
          name,
          i = 1

      for (; i < length; i++) {
      // 判断源对象是否为空
          if ((source = arguments[i]) != null) {
              for (name in source) {
                  // eslint-disable-next-line no-prototype-builtins
                  const hasPro = source.hasOwnProperty(name)
                  // 是否遍历源对象的原型链
                  if (hasPro || _default.includePrototype) {
                      targetItem = target[name]
                      sourceItem = source[name]
                      tiType = self.type(targetItem)
                      siType = self.type(sourceItem)

                      // 防止出现回环
                      if (target === sourceItem) {
                          continue
                      }

                      // 如果复制的是对象或者数组
                      if (_default.isDeep && sourceItem != null && self.typeMap[siType]) {
                          clone =
                targetItem != null && tiType === siType
                    ? targetItem
                    : self.typeMap[siType]()
                          // 递归
                          target[name] = self.merge(clone, sourceItem)
                      } else {
                          clone = hasPro ? target : target.__proto__
                          // 处理每一个合并项
                          clone = _default.forEach.call(self, clone, name, sourceItem)
                      }
                  }
              }
          }
      }
      return target
  }
}

// 深拷贝
export const deepClone = target => {
    // 可遍历类型 Map Set Object Array
    const typeMap = '[object Map]'
    const typeSet = '[object Set]'
    const typeObject = '[object Object]'
    const typeArray = '[object Array]'
    // 非原始类型的 不可遍历类型  Date RegExp Function
    const typeDate = '[object Date]'
    const typeRegExp = '[object RegExp]'
    const typeFunction = '[object Function]'

    // 非原始类型的 不可遍历类型的 集合（原始类型已经被过滤了不用再考虑了）
    const simpleType = [typeDate, typeRegExp, typeFunction]

    // 是否是引用类型
    const isObject = target => {
        if (target === null) {
            return false
        } else {
            const type = typeof target
            return type === 'object' || type === 'function'
        }
    }

    // 获取标准类型
    const getType = target => {
        return Object.prototype.toString.call(target)
    }

    /*
   * 1、处理原始类型 Number String Boolean Symbol Null Undefined
   * 2、处理不可遍历类型 Date RegExp Function
   * 3、处理循环引用情况 WeakMap
   * 4、处理可遍历类型 Set Map Array Object
   * */
    const clone = (target, map = new WeakMap()) => {
    // 处理原始类型直接返回(Number BigInt String Boolean Symbol Undefined Null)
        if (!isObject(target)) {
            return target
        }

        // 处理不可遍历类型
        const type = getType(target)
        if (simpleType.includes(type)) {
            switch (type) {
                case typeDate:
                    // 日期
                    return new Date(target)
                case typeRegExp:
                    // 正则
                    // eslint-disable-next-line no-case-declarations
                    const reg = /\w*$/
                    // eslint-disable-next-line no-case-declarations
                    const result = new RegExp(target.source, reg.exec(target)[0])
                    result.lastIndex = target.lastIndex // lastIndex 表示每次匹配时的开始位置
                    return result
                case typeFunction:
                    // 函数
                    return target
                default:
                    return target
            }
        }

        // 用于返回
        let cloneTarget

        // 处理循环引用
        if (map.get(target)) {
            // 已经放入过map的直接返回
            return map.get(target)
        }

        // 处理可遍历类型
        switch (type) {
            case typeSet:
                // Set
                cloneTarget = new Set()
                map.set(target, cloneTarget)
                target.forEach(item => {
                    cloneTarget.add(clone(item, map))
                })
                return cloneTarget
            case typeMap:
                // Map
                cloneTarget = new Map()
                map.set(target, cloneTarget)
                target.forEach((value, key) => {
                    cloneTarget.set(key, clone(value, map))
                })
                return cloneTarget
            case typeArray:
                // 数组
                cloneTarget = []
                map.set(target, cloneTarget)
                target.forEach((item, index) => {
                    cloneTarget[index] = clone(item, map)
                })
                return cloneTarget
            case typeObject:
                // 对象
                cloneTarget = {}
                map.set(target, cloneTarget)
                ;[
                    ...Object.keys(target),
                    ...Object.getOwnPropertySymbols(target)
                ].forEach(item => {
                    cloneTarget[item] = clone(target[item], map)
                })
                return cloneTarget
            default:
                return target
        }
    }
    return clone(target)
}

/**
 * 全屏
 */
export const toFullScreen = ele => {
    const el = ele || document.documentElement
    const rfs =
    el.requestFullScreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullScreen

    // typeof rfs != "undefined" && rfs
    if (rfs) {
        rfs.call(el)
    } else if (typeof window.ActiveXObject !== 'undefined') {
    // for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
    // eslint-disable-next-line no-undef
        const wscript = new ActiveXObject('WScript.Shell')
        if (wscript != null) {
            wscript.SendKeys('{F11}')
        }
    } else {
        alert('浏览器不支持全屏')
    }
}

/**
 * 退出全屏
 */
export const exitFullscreen = function(ele) {
    const el = ele || parent.document
    const cfs =
    el.cancelFullScreen ||
    el.webkitCancelFullScreen ||
    el.mozCancelFullScreen ||
    el.exitFullScreen

    // typeof cfs != "undefined" && cfs
    if (cfs) {
        cfs.call(el)
    } else if (typeof window.ActiveXObject !== 'undefined') {
    // for IE，这里和fullScreen相同，模拟按下F11键退出全屏
    // eslint-disable-next-line no-undef
        const wscript = new ActiveXObject('WScript.Shell')
        if (wscript != null) {
            wscript.SendKeys('{F11}')
        }
    } else {
        alert('切换失败,可尝试Esc退出')
    }
}

/**
 * 截取文件名
 */
export const pathToName = filtPath => {
    return filtPath.replace(/(.*\/)*([^.]+).*/gi, '$2')
}

/**
 * 格式化模板文件
 *
 */
export const tempBeautify = tempHTML => {
    const beautify_html = require('js-beautify').html
	
    return beautify_html(tempHTML)
}

/** 
* json对象转字符串形式 
*/ 
export const json2str = o => { 
    const arr = [] 
    const fmt = function(s) { 
        if (typeof s == 'object' && s != null) return json2str(s) 
        return /^(string|number)$/.test(typeof s) ? `'${  s  }'` : s 
    } 
    for (const i in o) arr.push(`${  i  }:${  fmt(o[i])}`) 
    return `{${  arr.join(',')  }}` 
} 