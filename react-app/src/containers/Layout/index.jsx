// 引入css样式
import layout from "./index.module.scss";

// 引入三方库
import React, { Component, Suspense, lazy, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { nanoid } from "nanoid";

// 引入组件
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Counts from "@/containers/Counts";
import SvgIcon from "@/components/SvgIcon";

// 引入actions
import { setScroll } from "@/redux/actions/layout";

// 引入全局方法
import { getFileName } from "@/util";

const ListLayout = lazy(() => import("@/pages/ListLayout"));
import Loading from "@/components/Loading";

// layout UI组件
class Layout extends Component {
	state = {
		show: false,
		list: [
			{
				id: nanoid(),
				name: "首页",
				pathname: "/index",
			},
			{
				id: nanoid(),
				name: "归档",
				pathname: "/archive",
				type: "ListLayout",
			},
			{
				id: nanoid(),
				name: "分类",
				pathname: "/classify",
				type: "ListLayout",
			},
			{
				id: nanoid(),
				name: "标签",
				pathname: "/tag",
				type: "ListLayout",
			},
			{
				id: nanoid(),
				name: "读书",
				pathname: "/readbook",
				type: "ListLayout",
			},
			{
				id: nanoid(),
				name: "资源",
				pathname: "/resource",
				type: "ListLayout",
			},
			{
				id: nanoid(),
				name: "CSDN",
				pathname:
					"https://blog.csdn.net/weixin_40637683?spm=1010.2135.3001.5343&type=blog",
			},
			{
				id: nanoid(),
				name: "掘金",
				pathname: "https://juejin.cn/user/2620826707309208",
			},
			{
				id: nanoid(),
				name: "历程",
				pathname: "/course",
				type: "ListLayout",
			},
			{
				id: nanoid(),
				name: "足迹",
				pathname: "/track",
				type: "ListLayout",
			},
			{
				id: nanoid(),
				name: "日记",
				pathname: "/diary",
				type: "ListLayout",
			},
			{
				id: nanoid(),
				name: "关于",
				pathname: "/about",
				type: "ListLayout",
			},
		],
		componentsNavList: [],
		documentHeight: 0,
	};
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);

		//组件懒加载
		let componentsNavList = this.state.list.filter((item) => {
			if (item.pathname.indexOf("http") === -1) {
				const componentsName = getFileName(item.pathname).firstUpperCase();
				item.components = lazy(() => import(`@/components/${componentsName}`));
				return item;
			}
			return null;
		});
		this.setState({ componentsNavList });
	}

	// 滚动条监听函数
	handleScroll = () => {
		let scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;

		if (scrollTop > 100) {
			this.setState({ show: true });
		} else {
			this.setState({ show: false });
		}
		this.props.setScroll(scrollTop);
	};

	// 滚动条回到顶部
	goTop = () => {
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

	render() {
		const { scrollTop } = this.props.layout;
		const { show, list, componentsNavList, documentHeight } = this.state;

		return (
			<Fragment>
				<div className={layout["layout-wrap"]}>
					<div>
						<Nav list={list} scrollTop={scrollTop} />
					</div>
					<div className={layout["layout-content"]}>
						<Suspense fallback={<Loading />}>
							<Switch>
								<Redirect exact from="/blog" to="/blog/index" />
								<Route path="/count" component={Counts} />

								{componentsNavList.map((item) => {
									return item.type === "ListLayout" ? (
										<ListLayout
											key={item.id}
											render={() => (
												<Route
													path={"/blog" + item.pathname}
													component={item.components}
												/>
											)}
										/>
									) : (
										<Route
											key={item.id}
											path={"/blog" + item.pathname}
											component={item.components}
										/>
									);
								})}
							</Switch>
						</Suspense>
					</div>
					<div className={layout["layout-bottom"]}>
						<Footer documentHeight={documentHeight} scrollTop={scrollTop} />
					</div>
				</div>
				<div
					className={`${show ? layout["show-icon"] : layout["go-top"]}`}
					onClick={this.goTop}
				>
					<SvgIcon className={layout["go-top-icon"]} iconClass="goTop" />
				</div>
			</Fragment>
		);
	}
}

// redux中状态映射到props中
const mapStateToProps = (state) => {
	return { ...state };
};

// redux中操作状态的方法映射到props中
const mapDispatchToProps = {
	setScroll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
