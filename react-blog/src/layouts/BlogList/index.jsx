import css from "./index.module.scss";

import React, { lazy } from "react";
import { Link } from "react-router-dom";

const Time = lazy(() => import("./components/Time"));

const ListLayout = (props) => {
	return (
		<div className={css["list-layout-wrap"]}>
			<div className={css["left"]}>
				<Time />
				<div className={css["item"]}>
					<h3 className={css["title"]}>最新文章</h3>
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
				<div className={css["item"]}>
					<h3 className={css["title"]}>链接</h3>
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
				<div className={css["item"]}>
					<h3 className={css["title"]}>标签云</h3>
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
			<div className={css["right"]}>{props.render()}</div>
		</div>
	);
};

export default ListLayout;
