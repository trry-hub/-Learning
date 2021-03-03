import archivestyle from "./index.module.scss";

import React, { Component, lazy } from "react";

const ListLayout = lazy(() => import("@/pages/ListLayout"));

export default class Archive extends Component {
	render() {
		return (
			<ListLayout
				render={() => {
					return (
						<div className={archivestyle["archive-wrap"]}>
							<div className={archivestyle["list"]}>13</div>
						</div>
					);
				}}
			/>
		);
	}
}
