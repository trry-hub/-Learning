import css from "./index.module.scss";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Classify = () => {
	const [num, setNum] = useState(0);
	const [classifyList, setClassifyList] = useState([]);
	useEffect(() => {
		const arr = [
			{
				type: "生活",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "程序人生",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "Git",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "Markdown",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "Github",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "jQuery",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "CSS",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "Javascript",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "Typescript",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "前端",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "MySQL",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "nodejs",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "web安全",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "浏览器",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
			{
				type: "其他",
				child: [{ date: "2021-03-24", contextTitle: "跟新了" }],
			},
		];
		setClassifyList(arr);
	}, []);

	const click = () => {
		setNum(num + 1);
	};
	return (
		<div className={css["classify-wrap"]} onClick={click}>
			{classifyList.map((item, index) => {
				return (
					<div key={index} className={css["item-wrap"]}>
						<h2 className={css["title"]}>{item.type}</h2>
						<ul>
							{item.child.map((childItem, i) => {
								return (
									<li key={i}>
										<span className={css["time"]}>{childItem.date}</span> -{" "}
										<Link to="/">{childItem.contextTitle}</Link>
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default Classify;
