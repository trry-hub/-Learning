import listlayoutstyle from "./index.module.scss";

import React, { Component, lazy } from "react";
import { Link } from "react-router-dom";

const Time = lazy(() => import("@/pages/ListLayout/Time"));

export default class ListLayout extends Component {
	render() {
		return (
			<div className={listlayoutstyle["list-layout-wrap"]}>
				<div className={listlayoutstyle["left"]}>
					<Time />
					<div className={listlayoutstyle["item"]}>
						<h3 className={listlayoutstyle["title"]}>最新文章</h3>
						<ul>
							<li>
								<Link to="/">123</Link>
							</li>
							<li>
								<Link to="/">123</Link>
							</li>
							<li>
								<Link to="/">123</Link>
							</li>
							<li>
								<Link to="/">123</Link>
							</li>
						</ul>
					</div>
					<div className={listlayoutstyle["item"]}>
						<h3 className={listlayoutstyle["title"]}>链接</h3>
						<ul>
							<li>
								<Link to="/">123</Link>
							</li>
							<li>
								<Link to="/">123</Link>
							</li>
							<li>
								<Link to="/">123</Link>
							</li>
							<li>
								<Link to="/">123</Link>
							</li>
						</ul>
					</div>
					<div className={listlayoutstyle["item"]}>
						<h3 className={listlayoutstyle["title"]}>标签云</h3>
						<ul>
							<li>
								<Link to="/">123</Link>
							</li>
							<li>
								<Link to="/">123</Link>
							</li>
							<li>
								<Link to="/">123</Link>
							</li>
							<li>
								<Link to="/">123</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={listlayoutstyle["right"]}>{this.props.render()}</div>
			</div>
		);
	}
}
