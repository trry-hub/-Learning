import css from "./index.module.scss";

import React from "react";
import { Link } from "react-router-dom";

const LeftTag = ({ list, title }) => {
	return (
		<div className={css["item"]}>
			<h3 className={css["title"]}>{title}</h3>
			<ul>
				{list?.map((item, index) => (
					<li key={index}>
						<Link to={item.path}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default LeftTag;
