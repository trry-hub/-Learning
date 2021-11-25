import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router'

/*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/
String.prototype.firstUpperCase = function () {
	return this.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
		return $1.toUpperCase() + $2.toLowerCase()
	})
}

export function getFileName(path, loc = '$2') {
	const reg = /(.*\/)*([^.]+).*/gi
	// $1 相对路径  $2 文件名  $3 文件后缀
	return path.replace(reg, loc)
}
export function getScrollTop() {
	var scroll_top = 0
	if (document.documentElement && document.documentElement.scrollTop) {
		scroll_top = document.documentElement.scrollTop
	} else if (document.body) {
		scroll_top = document.body.scrollTop
	}
	return scroll_top
}
// 深拷贝
export function deepClone(target) {
	// 定义一个变量
	let result
	// 如果当前需要深拷贝的是一个对象的话
	if (typeof target === 'object') {
		// 如果是一个数组的话
		if (Array.isArray(target)) {
			result = [] // 将result赋值为一个数组，并且执行遍历
			for (let i in target) {
				// 递归克隆数组中的每一项
				result.push(deepClone(target[i]))
			}
			// 判断如果当前的值是null的话；直接赋值为null
		} else if (target === null) {
			result = null
			// 判断如果当前的值是一个RegExp对象的话，直接赋值
		} else if (target.constructor === RegExp) {
			result = target
		} else {
			// 否则是普通对象，直接for in循环，递归赋值对象的所有值
			result = {}
			for (let i in target) {
				result[i] = deepClone(target[i])
			}
		}
		// 如果不是对象的话，就是基本数据类型，那么直接赋值
	} else {
		result = target
	}
	// 返回最终结果
	return result
}

// 获取浏览器滚动条位置
export const useScrollHeight = () => {
	const [scrollheight, setScrollHeight] = useState(0)

	const scroll = useCallback(() => {
		let scrollTop =
			window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		setScrollHeight(scrollTop)
	}, [])

	useEffect(() => {
		// 滚动条监听函数
		window.addEventListener('scroll', scroll)
		return () => {
			window.removeEventListener('scroll', scroll)
		}
	}, [scroll])
	return scrollheight
}
// 回到顶部
export const useReStoreScrollTop = () => {
	const { pathname } = useLocation()
	useEffect(() => {
		try {
			let scrollY = sessionStorage.getItem(pathname)
			scrollY && window.scrollTo(0, scrollY)
		} catch (error) {
			throw error
		}
		return () => {
			try {
				sessionStorage.setItem(pathname, window.scrollY) //这里使用scrollY是获取文档window在垂直页面
			} catch (error) {
				//的滚动值，如果是特定DOM元素用srcollTop
				throw error
			}
		}
	}, [pathname])
}

export function treeFindID(tree, callback, arr) {
	tree?.forEach((tmpRouter) => {
		if (callback(tmpRouter)) arr.push(tmpRouter)
		if (tmpRouter.children) treeFindID(tmpRouter.children, callback, arr)
	})
}
export function treeFindPathID(tree, fun, path = [], field) {
	if (!tree) return []
	for (const data of tree) {
		path.push(data && data[field])
		if (fun(data && data)) return path
		if (data && data.children) {
			const findChild = treeFindPathID(data && data.children, fun, path)
			if (findChild.length) return findChild
		}
		path.pop()
	}
	return []
}

// 获取图片地址
export function getSrc(name) {
	try {
		const path = `/src/assets/images/${name}.png`
		const modules = import.meta.globEager('/src/assets/images/*.png')
		return modules[path].default
	} catch (error) {
		console.log(error)
	}
}


// 深层合并对象
/**
 * 合并两个对象(默认生层合并)
 * 有深层合并功能 new EXT().merge(obj1,obj2)
 **/
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
		forEach: function (target, name, sourceItem) {
			target[name] = sourceItem
			return target
		}
	};
	typeMap = {
		object: function () {
			return {}
		},
		array: function () {
			return []
		}
	};
	// 将配置项合并到默认配置项
	init(options) {
		for (const name in options) {
			this.defaults[name] = options[name]
		}
		return this
	}
	type(o) {
		return Object.prototype.toString
			.call(o)
			.slice(8, -1)
			.toLowerCase()
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
// export const deepClone = target => {
// 	// 可遍历类型 Map Set Object Array
// 	const typeMap = '[object Map]'
// 	const typeSet = '[object Set]'
// 	const typeObject = '[object Object]'
// 	const typeArray = '[object Array]'
// 	// 非原始类型的 不可遍历类型  Date RegExp Function
// 	const typeDate = '[object Date]'
// 	const typeRegExp = '[object RegExp]'
// 	const typeFunction = '[object Function]'

// 	// 非原始类型的 不可遍历类型的 集合（原始类型已经被过滤了不用再考虑了）
// 	const simpleType = [typeDate, typeRegExp, typeFunction]

// 	// 是否是引用类型
// 	const isObject = target => {
// 		if (target === null) {
// 			return false
// 		} else {
// 			const type = typeof target
// 			return type === 'object' || type === 'function'
// 		}
// 	}

// 	// 获取标准类型
// 	const getType = target => {
// 		return Object.prototype.toString.call(target)
// 	}

// 	/*
// 	 * 1、处理原始类型 Number String Boolean Symbol Null Undefined
// 	 * 2、处理不可遍历类型 Date RegExp Function
// 	 * 3、处理循环引用情况 WeakMap
// 	 * 4、处理可遍历类型 Set Map Array Object
// 	 * */
// 	const clone = (target, map = new WeakMap()) => {
// 		// 处理原始类型直接返回(Number BigInt String Boolean Symbol Undefined Null)
// 		if (!isObject(target)) {
// 			return target
// 		}

// 		// 处理不可遍历类型
// 		const type = getType(target)
// 		if (simpleType.includes(type)) {
// 			switch (type) {
// 				case typeDate:
// 					// 日期
// 					return new Date(target)
// 				case typeRegExp:
// 					// 正则
// 					// eslint-disable-next-line no-case-declarations
// 					const reg = /\w*$/
// 					// eslint-disable-next-line no-case-declarations
// 					const result = new RegExp(target.source, reg.exec(target)[0])
// 					result.lastIndex = target.lastIndex // lastIndex 表示每次匹配时的开始位置
// 					return result
// 				case typeFunction:
// 					// 函数
// 					return target
// 				default:
// 					return target
// 			}
// 		}

// 		// 用于返回
// 		let cloneTarget

// 		// 处理循环引用
// 		if (map.get(target)) {
// 			// 已经放入过map的直接返回
// 			return map.get(target)
// 		}

// 		// 处理可遍历类型
// 		switch (type) {
// 			case typeSet:
// 				// Set
// 				cloneTarget = new Set()
// 				map.set(target, cloneTarget)
// 				target.forEach(item => {
// 					cloneTarget.add(clone(item, map))
// 				})
// 				return cloneTarget
// 			case typeMap:
// 				// Map
// 				cloneTarget = new Map()
// 				map.set(target, cloneTarget)
// 				target.forEach((value, key) => {
// 					cloneTarget.set(key, clone(value, map))
// 				})
// 				return cloneTarget
// 			case typeArray:
// 				// 数组
// 				cloneTarget = []
// 				map.set(target, cloneTarget)
// 				target.forEach((item, index) => {
// 					cloneTarget[index] = clone(item, map)
// 				})
// 				return cloneTarget
// 			case typeObject:
// 				// 对象
// 				cloneTarget = {}
// 				map.set(target, cloneTarget);
// 				[...Object.keys(target), ...Object.getOwnPropertySymbols(target)].forEach(item => {
// 					cloneTarget[item] = clone(target[item], map)
// 				})
// 				return cloneTarget
// 			default:
// 				return target
// 		}
// 	}
// 	return clone(target)
// }
