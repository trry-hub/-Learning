// 引入css样式
import css from "./index.module.scss";

// 引入三方库
import React, { useState, useEffect, Suspense, lazy, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import routes from "@/routes";
import Loading from "@/components/Loading";
// 引入组件
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Counts from "@/containers/Counts";
import SvgIcon from "@/components/SvgIcon";
import Index from "@/pages/Index";
// 引入actions
import { setScroll } from "@/redux/actions/blog-layout";
import Scrollbar from "@/components/Scrollbar";

// 引入全局方法
import { getFileName, useScrollHeight } from "@/utils/index";

const BlogList = lazy(() => import("@/layouts/BlogList"));

// Blog UI组件
const Blog = (props) => {
	const [list] = useState(routes);
	const [documentHeight] = useState(0);
	const [componentsChild, setComponentsChild] = useState([]);
	const { location } = props;

	useEffect(() => {
		// 组件懒加载
		let child = list
			.filter((item) => {
				if (item.pathname.indexOf("http") === -1) {
					const componentsName = getFileName(item.pathname).firstUpperCase();
					item.component = lazy(() => import(`@/pages/${componentsName}`));
					return item;
				}
				return null;
			})
			.find((item) => location.pathname === "/blog" + item.pathname);

		setComponentsChild(child);
	}, [list, location]);

	// 滚动条回到顶部
	const goTop = () => {
		const body = document.body;
		const bodyStyle = body.style;
		let scrollTop = document.documentElement.scrollTop || body.scrollTop;
		bodyStyle.marginTop = -scrollTop + "px";
		body.scrollTop = 0;
		bodyStyle.transition = "all 0.5s ease-in-out";
		bodyStyle.marginTop = 0;
		setTimeout(() => {
			bodyStyle.transition = "none";
		}, 500);
	};

	const { scrollTop } = props.layout;
	return (
		<Fragment>
			<div className={css["layout-wrap"]}>
				<div>
					<Nav list={list} scrollTop={scrollTop} />
				</div>
				<div className={css["layout-content"]}>
					<Suspense fallback={<Loading />}>
						<Switch>
							<Scrollbar>
								<Route path="/count" component={Counts} />
								<Route path="/blog/index" component={Index} />
								<BlogList
									render={() => (
										<Route
											path={componentsChild.pathname}
											component={componentsChild.component}
										/>
									)}
								/>
							</Scrollbar>
						</Switch>
					</Suspense>
				</div>

				<div className={css["layout-bottom"]}>
					<Footer documentHeight={documentHeight} scrollTop={scrollTop} />
				</div>
			</div>
			<div
				className={`${
					useScrollHeight() > 100 ? css["show-icon"] : css["go-top"]
				}`}
				onClick={goTop}
			>
				<SvgIcon className={css["go-top-icon"]} iconClass="goTop" />
			</div>
		</Fragment>
	);
};

// redux中状态映射到props中
const mapStateToProps = (state) => {
	return { ...state };
};

// redux中操作状态的方法映射到props中
const mapDispatchToProps = {
	setScroll,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Blog));
