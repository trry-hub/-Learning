import studystyle from "./index.module.scss";

import React, { Component } from "react";

export default class Study extends Component {
	render() {
		return (
			<div className={studystyle["study-wrap"]}>
				<div className={studystyle["left"]}>
					<h4 className={studystyle["title"]}>优秀网站</h4>
				</div>
				<div className={studystyle["right"]}>
					<h4 className={studystyle["title"]}>友情链接</h4>
				</div>
			</div>
		);
	}
}
