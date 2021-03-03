import React, { PureComponent } from "react";
import footerstyle from "./index.module.scss";

import { MyContext } from "@/util/context-manager";
export default class Footer extends PureComponent {
	// 声明接收
	static contextType = MyContext;

	state = {
		footerRef: "",
		footerHeight: 0,
	};
	footerRef = React.createRef("");

	componentDidMount() {
		const footerHeight = this.footerRef.current.offsetHeight;
		this.setState({
			footerHeight,
		});
	}
	render() {
		const { footerHeight } = this.state;
		const { scrollTop } = this.props;
		const { documentHeight } = this.context;
		return (
			<div
				className={`${footerstyle["footer-wrap"]} ${
					documentHeight - scrollTop >= footerHeight
						? footerstyle["shadow"]
						: ""
				}`}
				style={{ height: `${footerHeight}px` }}
			>
				<div ref={this.footerRef} className={footerstyle["footer"]}>
					©2020 trry 的技术博客
				</div>
			</div>
		);
	}
}
