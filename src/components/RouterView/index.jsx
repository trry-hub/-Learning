import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { router } from '@/router'
import { blog } from '@/router/blog'

import Classify from '@/pages/blog/classify'

const RouterView = (props) => {
	const { routers } = props
	const [routerDate] = useState(routers ? routers : blog)
	const [routerDatepath, setrouterDatepath] = useState([])
	const [defaultRedirect, setdefaultRedirect] = useState([])

	useEffect(() => {
		//筛除带有重定向的
		let routerDatepath = routerDate.filter((item) => {
			return !item.redirect && item.path.indexOf('http') === -1
		})
		setrouterDatepath(routerDatepath)

		let tempRedirect = routerDate.filter(
			(item) => item.redirect && item.path.indexOf('http') === -1
		)
		console.log('tempRedirect', tempRedirect);
		//重定向
		let defaultRedirect = tempRedirect.map(({ path, meta, redirect, element: Comp, children }, i) => {
			if (redirect) {
				return ''
			} else {
				return <Routes >
					<Route path={path} element={<h2 key={path + i}>123</h2>}></Route>
				</Routes>
			}
		})
		setdefaultRedirect(defaultRedirect)

		console.log(defaultRedirect);
	}, [routerDate])

	function navigateTo(path) {
		const navigate = useNavigate()
		navigate(path)
	}

	return (
		<>
			{routerDatepath?.map(({ path, meta, element: Comp, children }, index) => {
				return (
					!children ? <Routes key={index}>
						<Route path={path} element={<Comp />} />
					</Routes> : path !== '' && <Comp key={path + index} render={() => <RouterView routers={children} />} />
				)
				//重定向
			}).concat(defaultRedirect)
			}
		</>
	)
}

export default RouterView
