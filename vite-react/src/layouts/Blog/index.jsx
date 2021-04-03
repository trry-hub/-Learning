// 引入css样式
import css from "./index.module.scss";

// 引入三方库
import React, {
	useState,
	useEffect,
	useMemo,
	useRef,
	Suspense,
	lazy,
	Fragment,
} from "react";
import {  withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { navList } from "@/router";
import Loading from "@/components/Loading";
import Scrollbar from "@/components/Scrollbar";
// 引入组件
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Counts from "@/containers/Counts";
import SvgIcon from "@/components/SvgIcon";
import Index from "@/pages/blog/Index";
// 引入actions
import { setScroll } from "@/redux/actions/blog-layout";

// 引入全局方法
import { getFileName, useScrollHeight } from "@/utils/index";
const BlogList = lazy(() => import("@/layouts/BlogList"));
const Archive = lazy(() => import("@/pages/Archive"));
const RouterView = lazy(() => import("@/components/RouterView"));
import {blog} from '@/router/blog'

// Blog UI组件
const Blog = (props) => {
	const [list] = useState(navList);
	const [documentHeight] = useState(0);
	const [childArr, setChildArr] = useState([]);
	const [scrollTop, setScrollTop] = useState(0);
	const scrollbars = useRef();

	useEffect(() => {
		// 组件懒加载
		const arr = [];
		list.filter((item) => {
			// if (item.pathname.indexOf("http") === -1 && item.type === "ListLayout") {
			// 	const componentsName = getFileName(item.pathname).firstUpperCase();
			// 	arr.push(
			// 		<Route
			// 			key={item.id}
			// 			path={item.pathname}
			// 			component={lazy(() =>
			// 				import(`../../pages/${componentsName}/index.jsx`)
			// 			)}
			// 		/>
			// 	);
			// }
		});
		setChildArr(arr);
	}, [list]);

	/*监听滚动*/
	const onScroll = (e) => {
		setScrollTop(scrollbars.current.getScrollTop());
		if (e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight) {
			// 滚动到底部需要做的事情
			console.log("daodile");
		}
	};

	return (
		<Fragment>
			<div className={css["layout-wrap"]}>
				<div>
					<Nav scrollTop={scrollTop} />
				</div>
				<div className={css["layout-content"]}>
					<Suspense fallback={<Loading />}>
						<Scrollbar ref={scrollbars} onScroll={onScroll}>
							{useMemo(
								() => (
									<RouterView routers={blog} />
								),
								[blog]
							)}
							{/* <Switch>
								<Route path="/count" component={Counts} />
								<Route path="/blog/index" component={Index} />
							</Switch> */}
						</Scrollbar>
					</Suspense>
				</div>
				<div className={css["layout-bottom"]}>
					<Footer documentHeight={documentHeight} scrollTop={scrollTop} />
				</div>
			</div>
			<div
				className={`${scrollTop > 100 ? css["show-icon"] : css["go-top"]}`}
				onClick={() => scrollbars.current.scrollToTop()}
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
