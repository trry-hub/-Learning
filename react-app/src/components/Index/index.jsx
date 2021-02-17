import index from "./index.module.scss";

import React, { Component } from "react";

import List from "./List";
import Card from "./Card";

export default class Index extends Component {
	render() {
		return (
			<div className={index["wrap"]}>
				<List />
				<Card />
			</div>
		);
	}
}
