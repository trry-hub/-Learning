import React, { useState, useEffect } from 'react'
import { withRouter, Switch } from 'react-router'
import { Route, Redirect } from 'react-router-dom'
import { router } from '@/router'

const RouterView = (props) => {
	const { routers } = props
	const [routerDate] = useState(routers ? routers : router)
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
		//重定向
		let defaultRedirect = tempRedirect.map(({ pathname, meta, component, children, exact = true }, i) => {
			const Com = component
			return children ? (
				<Route exact={exact} key={i}>
					<Com render={() => <RouterView routers={children} />} />
				</Route>
			) : (
				<Redirect key={i} to={item.redirect}></Redirect>
			)
		})
		setdefaultRedirect(defaultRedirect)
	}, [routerDate])

	return (
		<Switch>
			{routerDatepath
				?.map(({ pathname, meta, component, children, exact = true }, index) => {
					const Comp = component
					return (
						<Route
							path={pathname}
							exact={exact}
							render={
								//api 路由相关参数参数及其它
								(arg) => {
									//动态的title
									document.title = 'trry-' + meta?.title || 'blog'
									//把下一级路由参数存入props中
									return children ? (
										<Route exact={exact} key={index}>
											<Comp
												render={() => <RouterView routers={children} />}
											/>
										</Route>
									) : (
										<Comp {...arg} />
									)
								}
							}
							key={'key' + index}
						></Route>
					)
					//重定向
				})
				.concat(defaultRedirect)}
		</Switch>
	)
}

export default withRouter(RouterView)
