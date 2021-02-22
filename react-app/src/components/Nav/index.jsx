import nav from "./index.module.scss";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { nanoid } from "nanoid";

class Nav extends Component {
	// 初始化 satae
	state = {
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
			},
			{
				id: nanoid(),
				name: "分类",
				pathname: "/classify",
			},
			{
				id: nanoid(),
				name: "标签",
				pathname: "/tag",
			},
			{
				id: nanoid(),
				name: "读书",
				pathname: "/read",
			},
			{
				id: nanoid(),
				name: "资源",
				pathname: "/api",
			},
			{
				id: nanoid(),
				name: "CSDN",
				pathname: "/",
			},
			{
				id: nanoid(),
				name: "掘金",
				pathname: "",
			},
			{
				id: nanoid(),
				name: "历程",
				pathname: "/course",
			},
			{
				id: nanoid(),
				name: "足迹",
				pathname: "/track",
			},
			{
				id: nanoid(),
				name: "日记",
				pathname: "/diary",
			},
			{
				id: nanoid(),
				name: "关于",
				pathname: "/about",
			},
		],
		navHeight: 0,
		scrollTop: 0,
	};
	myRef = React.createRef();

	componentDidMount = () => {
		window.addEventListener("scroll", this.handleScroll);
		const navHeight = this.myRef.current.offsetHeight;
		this.setState({
			navHeight,
		});
	};
	// 滚动条监听函数
	handleScroll = () => {
		let scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;

		this.setState({
			scrollTop,
		});
	};

	render() {
		const { list, navHeight, scrollTop } = this.state;

		return (
			<div style={{ height: `${navHeight}px` }}>
				<div
					className={`${nav["nav-wrap"]} ${
						scrollTop >= navHeight ? nav["shadow"] : ""
					}`}
					ref={this.myRef}
				>
					<div
						className={nav["left-grid"]}
						style={{ gridTemplateColumns: `repeat(${list.length + 1}, auto)` }}
					>
						<img
							className={`${nav["logo"]} btn-link`}
							src={require("@/assets/images/logo.gif").default}
							alt="trry"
						/>
						{list.map((item) => {
							return (
								<Link
									to={{ pathname: item.pathname }}
									className="btn btn-link"
									key={item.id}
								>
									{item.name}
								</Link>
							);
						})}
					</div>
					<div className={nav["right-grid"]}>
						<div className="btn btn-primary">Primary</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Nav);
