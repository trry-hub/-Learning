import React, { PureComponent } from "react";
import css from "./index.module.scss";

import { MyContext } from "@/utils/context-manager";
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
		const { documentHeight } = this.context || 0;
		let distance = documentHeight - document.body.clientHeight - scrollTop;
		return (
			<div
				className={css["footer-wrap"]}
				style={{ height: `${footerHeight}px` }}
			>
				<div
					ref={this.footerRef}
					className={`${css["footer"]} ${distance > 0 ? css["shadow"] : ""}`}
				>
					©2020 trry 的技术博客
					<img src={require("@/assets/images/rss.png").default} alt="rss" />
				</div>
			</div>
		);
	}
}
