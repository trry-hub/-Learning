import nav from "./index.module.scss";

import React, { Component } from "react";

export default class Nav extends Component {
	// 初始化 satae
	state = {
		list: [
			{
				name: "trry",
				pathname: "/",
			},
			{
				name: "首页",
				pathname: "/index",
			},
			{
				name: "归档",
				pathname: "/archive",
			},
			{
				name: "分类",
				pathname: "/classify",
			},
			{
				name: "标签",
				pathname: "/tag",
			},
			{
				name: "读书",
				pathname: "/read",
			},
			{
				name: "资源",
				pathname: "/API",
			},
			{
				name: "CSDN",
				pathname: "/",
			},
			{
				name: "掘金",
				pathname: "",
			},
			{
				name: "历程",
				pathname: "/course",
			},
			{
				name: "足迹",
				pathname: "/track",
			},
			{
				name: "日记",
				pathname: "/diary",
			},
			{
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
					className={`${nav["nav-wrap"]} ${scrollTop >= navHeight?nav["shadow"]: ''}`}
					ref={this.myRef}
				>
					<div
						className={nav["left-grid"]}
						style={{ gridTemplateColumns: `repeat(${list.length}, auto)` }}
					>
						{list.map((item, i) => {
							return (
								<div className="btn btn-link" key={i}>
									{item.name}
								</div>
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
