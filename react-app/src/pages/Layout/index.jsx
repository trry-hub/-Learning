import layout from "./index.module.scss";

import React, { Component } from "react";
import Nav from "../../components/Nav";

export default class Layout extends Component {
	render() {
		return (
			<div className={layout["layout-wrap"]}>
				<Nav />
				<div className={layout["layout-content"]}>内容区</div>
				<div className={layout["layout-bottom"]}>底部</div>
			</div>
		);
	}
}
