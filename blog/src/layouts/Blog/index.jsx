// 引入css样式
import css from "./index.module.scss";

// 引入三方库
import React, {
	useState,
	useEffect,
	useCallback,
	useMemo,
	Suspense,
	lazy,
	Fragment,
} from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import NProgress from "nprogress";
// import "nprogress/nprogress.css"; // progress bar style

// 引入全局方法
import { getFileName } from "@/utils";
import Loading from "@/components/Loading";
// 引入组件
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Counts from "@/containers/Counts";
import SvgIcon from "@/components/SvgIcon";
import Index from "@/pages/Index";

// 引入actions
import { setScroll } from "@/redux/actions/blog-layout";

import routes from "@/routes";

const BlogList = lazy(() => import("@/layouts/BlogList"));

// Blog UI组件
const Blog = (props) => {
	const [show, setShow] = useState(false);
	const [list] = useState(routes);
	const [documentHeight] = useState(0);
	const [componentsChild, setComponentsChild] = useState([]);

	useEffect(() => {
		console.log("生命周期执行了");

		// 滚动条监听函数
		window.addEventListener("scroll", scroll);
		// 组件懒加载
		let arr = list.filter((item) => {
			if (item.pathname.indexOf("http") === -1) {
				const componentsName = getFileName(item.pathname).firstUpperCase();
				item.component = lazy(() => import(`@/pages/${componentsName}`));
				return item;
			}
			return null;
		});
		let child = arr?.find((item) => {
			return props.location.pathname === "/blog" + item.pathname;
		});
		setComponentsChild(child);
		return () => {
			window.removeEventListener("scroll", () => {}, false);
		};
	}, [list]);

	const scroll = useCallback(() => {
		let scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;
		if (scrollTop > 100) {
			setShow(true);
		} else {
			setShow(false);
		}
		props.setScroll(scrollTop);
	}, [props]);
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

	const getChildComponent = useMemo(() => {
		return (
			<Route
				path={componentsChild.pathname}
				component={componentsChild.component}
			/>
		);
	}, [componentsChild]);

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
							<Route path="/count" component={Counts} />
							<Route path="/blog/index" component={Index} />
							<BlogList render={() => getChildComponent} />
						</Switch>
					</Suspense>
				</div>
				<div className={css["layout-bottom"]}>
					<Footer documentHeight={documentHeight} scrollTop={scrollTop} />
				</div>
			</div>
			<div
				className={`${show ? css["show-icon"] : css["go-top"]}`}
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
