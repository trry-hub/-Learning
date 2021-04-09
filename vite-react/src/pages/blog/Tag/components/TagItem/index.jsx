import css from "./index.module.scss";

import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "antd";

const TagItem = (props) => {
	const { title, path, num } = props;
	return (
		<>
			{title && (
				<div className={css["tag-item"]}>
					<div className={css["left"]}>
						<Link to={path}>{title}</Link>
					</div>
					<Badge className={css["right-num"]} count={num} />
				</div>
			)}
		</>
	);
};
export default TagItem;
