import css from "./index.module.scss";

import React from "react";
import { Link } from "react-router-dom";

const TagItem = (props) => {
	const { title, path, num } = props;
	return (
		<>
			{title && (
				<div className={css["tag-item"]}>
					<div className={css["left"]}>
						<Link to={path}>{title}</Link>
					</div>
					{num && <div className={css["right-num"]}>{num}</div>}
				</div>
			)}
		</>
	);
};
export default TagItem;
