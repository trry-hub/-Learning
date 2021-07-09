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
