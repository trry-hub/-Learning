import css from "./index.module.scss";

import React, { lazy, useState } from "react";

const Time = lazy(() => import("./components/Time"));
const LeftTag = lazy(() => import("./components/LeftTag"));

const ListLayout = (props) => {
	const arr = [
		{
			title: "最新文章",
			list: [
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
			],
		},
		{
			title: "链接",
			list: [
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
			],
		},
		{
			title: "标签云",
			list: [
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
				{ title: "123", path: "/" },
			],
		},
	];

	const [list] = useState(arr)
	return (
		<div className={css["list-layout-wrap"]}>
			<div className={css["left"]}>
				<Time />
				{list.map((item, index) => (
					<LeftTag key={index} {...item} />
				))}
			</div>
			<div className={css["right"]}>{props.render()}</div>
		</div>
	);
};

export default ListLayout;
