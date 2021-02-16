// 重置默认样式
import "./util/reset.css"

import React,{ Component } from "react";

import Layout from "./pages/Layout";

export default class App extends Component {
	state = {};
	

	render() {
		return (
			<div className="body">
				<Layout />
			</div>
		);
	}
}
