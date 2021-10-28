import React, { useEffect } from 'react'
import css from './index.module.scss'

import rss from '@/assets/images/rss.png'
const Footer = (props) => {
	const observeBodyHeight = () => {
		var initHeight = document.body.clientHeight
		// Firefox和Chrome早期版本中带有前缀
		var MutationObserver =
			window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
		// 选择目标节点
		var target = document.body
		// 创建观察者对象
		var observer = new MutationObserver(function (mutations) {
			if (initHeight != document.body.clientHeight) {
				initHeight = document.body.clientHeight
			}
		})
		// 配置观察选项:
		var config = {
			attributes: true,
			childList: true,
			subtree: true
		}
		// 传入目标节点和观察选项
		observer.observe(target, config)
		// 随后,你还可以停止观察
		//observer.disconnect();
		return observer
	}

	useEffect(() => {
		observeBodyHeight()
		return () => {
			observeBodyHeight().disconnect()
		}
	}, [])
	const { scrollTop } = props
	let distance = document.body.scrollHeight - document.body.offsetHeight - scrollTop

	return (
		<div className={css['footer-wrap']}>
			<div className={`${css['footer']} ${distance > 0 ? css['shadow'] : ''}`}>
				<span>©2020 trry 的技术博客</span>
				<img src={rss} alt="rss" />
			</div>
		</div>
	)
}

export default Footer
