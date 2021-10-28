import item from "./index.module.scss";

import React from "react";
import { Link } from "react-router-dom";

const Item = ({ title, synopsis, path }) => {
	return (
		<div className={item["item-wrap"]}>
			<Link tag="span" to={path} className={item["title"]}>
				{title}
			</Link>
			<div className={item["synopsis"]}>{synopsis}</div>
			<span className={item["more"]}>显示更多</span>
		</div>
	);
};
export default Item;
