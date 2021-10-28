import css from "./index.module.scss";

import React, { Component } from "react";

export default class Loading extends Component {
	render() {
		return (
			<div className={css["loading-wrap"]}>
				<div className={css["loading"]}>
					<span style={{ "--i": 1 }}></span>
					<span style={{ "--i": 2 }}></span>
					<span style={{ "--i": 3 }}></span>
					<span style={{ "--i": 4 }}></span>
					<span style={{ "--i": 5 }}></span>
					<span style={{ "--i": 6 }}></span>
					<span style={{ "--i": 7 }}></span>
				</div>
				<svg>
					<filter id="gooey">
						<feGaussianBlur in="SourceGraphic" stdDeviation="10" />
						<feColorMatrix values=" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -5 " />
					</filter>
				</svg>
			</div>
		);
	}
}
