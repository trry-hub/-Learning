import listlayoutstyle from "./index.module.scss";

import React, { Component, lazy } from "react";

const Time = lazy(() => import("@/pages/ListLayout/Time"));

export default class ListLayout extends Component {
	render() {
		return (
			<div className={listlayoutstyle["list-layout-wrap"]}>
				<div className={listlayoutstyle["left"]}>
					<Time />
				</div>
				<div className={listlayoutstyle["right"]}>{this.props.render()}</div>
			</div>
		);
	}
}
