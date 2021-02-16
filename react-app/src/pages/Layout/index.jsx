import layout from "./index.module.scss";

import React, { Component } from "react";
import Nav from "../../components/Nav";
import Content from '../../components/Content'

export default class Layout extends Component {
	render() {
		return (
			<div className={layout["layout-wrap"]}>
				<div>
					<Nav />
				</div>
				<div className={layout["layout-content"]}>
					<Content />
				</div>
				<div className={layout["layout-bottom"]}>底部</div>
			</div>
		);
	}
}
