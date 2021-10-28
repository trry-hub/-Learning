import css from "./index.module.scss";

import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const BookItem = (props) => {
	const { cover, title, status, intro, path } = props;
	return (
		<div className={css["book-item"]}>
			<div className={css["book-cover"]}>
				<img src={cover} />
			</div>
			<div className={css["book-detail"]}>
				<div className={css["book-info"]}>
					<Link to={path} className={css["title"]}>
						{title}
					</Link>
					<Button className={css["book-status"]} type="primary">
						{status}
					</Button>
				</div>
				<div className={css["book-intro"]}>{intro}</div>
			</div>
		</div>
	);
};
export default BookItem;
