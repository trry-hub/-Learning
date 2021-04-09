import css from "./index.module.scss";

import React, { Component } from "react";

export default class Course extends Component {
	render() {
		return (
			<div className={css["course-wrap"]}>
				<h2 className={css["title"]}>Road station</h2>
				<ul>
					<li>
						<span>2021.03.14</span>
						<span className={css["tag-name"]}>注册域名itmyhome.com</span>
					</li>
					<li>123</li>
					<li>123</li>
					<li>123</li>
				</ul>
			</div>
		);
	}
}
