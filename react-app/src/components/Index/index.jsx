import index from "./index.module.scss";

import React, { PureComponent } from "react";

import List from "./List";
import Card from "./Card";

export default class Index extends PureComponent {
	render() {
		return (
			<div className={index["wrap"]}>
				<List />
				<Card />
			</div>
		);
	}
}
