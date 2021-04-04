import css from "./index.module.scss";

import React, { useState, useEffect } from "react";
import TagItem from "./components/TagItem";

const Tag = () => {
	const [tagList, settagList] = useState([]);
	const list = [
		{
			title: "Git",
			path: "/",
			num: 12,
		},
		{
			title: "Git",
			path: "/",
			num: 12,
		},
		{
			title: "Git",
			path: "/",
			num: 12,
		},
		{
			title: "Git",
			path: "/",
			num: 12,
		},
	];
	useEffect(() => {
		settagList(list);
	}, []);
	const click = (count) => {
		setCount(++count);
	};
	return (
		<div className={css["tag-wrap"]} onClick={() => click(count)}>
			{tagList.map((item, index) => (
				<TagItem {...item} key={index} />
			))}
		</div>
	);
};
export default Tag;
