import layout from "./index.module.scss";

import React,{PureComponent } from "react";
import { Route} from "react-router"

import Nav from "../../components/Nav";
import Index from "../../components/Index";

import Counts from "@/containers/Counts";

export default class Layout extends PureComponent {
	jump = (path) => {
		let pathStr = path.replace("/", "")
		this.setState({
			toPath: path,
			toComponent: pathStr.charAt(0).toUpperCase() + pathStr.slice(1),
		});
	};

	render() {
		return (
			<div className={layout["layout-wrap"]}>
				<div>
					<Nav jump={this.jump} />
				</div>
				<div className={layout["layout-content"]}>
					<Route path="/index" PureComponent={Index} />
					<Route path="/count" PureComponent={Counts} />
				</div>
				<div className={layout["layout-bottom"]}>底部</div>
			</div>
		);
	}
}