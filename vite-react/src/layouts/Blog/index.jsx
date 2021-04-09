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
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { navList } from "@/router";
import Loading from "@/components/Loading";
import Scrollbar from "@/components/Scrollbar";
// 引入组件
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Counts from "@/containers/Counts";
import SvgIcon from "@/components/SvgIcon";
// 引入actions
import { setScroll } from "@/redux/actions/blog-layout";

const RouterView = lazy(() => import("@/components/RouterView"));
import { blog } from "@/router/blog";

// Blog UI组件
const Blog = (props) => {
	const [scrollTop, setScrollTop] = useState(0);
	const scrollbars = useRef();

	console.log(props.location);

	/*监听滚动*/
	const onScroll = (e) => {
		setScrollTop(scrollbars.current.getScrollTop());
		if (e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight) {
			// 滚动到底部需要做的事情
			console.log("daodile");
		} else {
		}
	};

	return (
		<Fragment>
			<div className={css["layout-wrap"]}>
				<Nav scrollTop={scrollTop} />
				<div className={css["layout-content"]}>
					<Suspense fallback={<Loading />}>
						<Scrollbar
							ref={scrollbars}
							hideTracksWhenNotNeeded={true}
							universal={true}
							onScroll={onScroll}
						>
							{useMemo(
								() => (
									<RouterView routers={blog} />
								),
								[]
							)}
							{/* <Switch>
								<Route path="/count" component={Counts} />
								<Route path="/blog/index" component={Index} />
							</Switch> */}
						</Scrollbar>
					</Suspense>
				</div>
				<Footer scrollTop={scrollTop} />
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
