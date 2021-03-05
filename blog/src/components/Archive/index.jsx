import css from "./index.module.scss";

import React, { Component } from "react";

// import Loading from "@/components/Loading";

export default class Archive extends Component {
	render() {
		return (
			<div className={css["archive"]}>
				<div className={css["list"]}>{/* <Loading /> */}123</div>
			</div>
		);
	}
}
