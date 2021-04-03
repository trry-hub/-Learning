import React from "react";
import { withRouter } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import { router } from "@/router";

const RouterView = (props) => {
	//props接收配置文件
	//routers 下一级路由的参数
	//defaultConfig默认传参
	const { routers } = props;
	let routerDate = routers ? routers : router;
	//数据二次处理

	//筛除带有重定向的
	let routerDatepath = routerDate.filter((item) => {
		return !item.redirect;
	});
	//筛选重定向
	let defualtRouter = routerDate.filter((item) => {
		return item.redirect;
	});
	//重定向
	let defualtRedirect = defualtRouter.map((item, i) => {
		return item.children ? (
			<item.component
				key={i}
				render={() => <RouterView routers={item.children} />}
			/>
		) : (
			<Redirect key={i} path={item.path} to={item.redirect}></Redirect>
		);
    });
    console.log(12);
    
	return (
		<Switch>
			{routerDatepath
				?.map(({ path, meta, component, children, exact = true }, index) => {
					const Comp = component;
					// 一个大坑 要用render 不然用component会导致页面的回流
					return (
						<Route
							path={path}
							exact={exact}
							render={
								//api 路由相关参数参数及其它
								(api) => {
									//动态的title
									document.title = 'trry-'+meta?.title || "blog";
									//把下一级路由参数存入props中
									return children ? (
										<RouterView routers={children} />
									) : (
										<Comp routers={children} {...api}></Comp>
									);
								}
							}
							key={"key" + index}
						></Route>
					);
					//重定向
				})
				.concat(defualtRedirect)}
		</Switch>
	);
};

export default withRouter(RouterView);
