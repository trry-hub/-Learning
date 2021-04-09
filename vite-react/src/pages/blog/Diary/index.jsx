import css from "./index.module.scss";

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Diary extends Component {
	render() {
		return (
			<div className={css["diary-wrap"]}>
				<h4>日记</h4>
				<span className={css["sub-title"]}>记录每一个开心和不开心的瞬间！</span>
				<ul className={css["wrap-content"]}>
					<li className={css["item"]}>
						<span className={css["date"]}>2021-03-31</span>
						<Link to="/">日记标题</Link>
					</li>
					<li className={css["item"]}>123</li>
					<li className={css["item"]}>123</li>
					<li className={css["item"]}>123</li>
				</ul>
			</div>
		);
	}
}
