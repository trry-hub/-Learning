import css from "./index.module.scss";

import React, { useEffect, useState } from "react";
import BookItem from "./components/BookItem";

const Readbook = () => {
	const list = [
		{
			title: "被讨厌的勇气",
			path: "/",
			status: "已读",
			intro: "因为拥有了被讨厌的勇气，于是有了真正幸福的可能。",
			cover: "http://blog.itmyhome.com//images/books/beitaoyandeyongqi.png",
		},
		{
			title: "被讨厌的勇气",
			path: "/",
			status: "已读",
			intro: "因为拥有了被讨厌的勇气，于是有了真正幸福的可能。",
			cover: "http://blog.itmyhome.com//images/books/beitaoyandeyongqi.png",
		},
		{
			title: "被讨厌的勇气",
			path: "/",
			status: "已读",
			intro: "因为拥有了被讨厌的勇气，于是有了真正幸福的可能。",
			cover: "http://blog.itmyhome.com//images/books/beitaoyandeyongqi.png",
		},
		{
			title: "被讨厌的勇气",
			path: "/",
			status: "已读",
			intro: "因为拥有了被讨厌的勇气，于是有了真正幸福的可能。",
			cover: "http://blog.itmyhome.com//images/books/beitaoyandeyongqi.png",
		},
	];
	const [bookList, setbookList] = useState([]);
	useEffect(() => {
		setbookList(list);
	}, []);
	return (
		<div className={css["readbook-wrap"]}>
			<h4>我的书单</h4>
			<span className={css["sub-title"]}>
				业精于勤，荒于嬉; 行成于思，毁于随
			</span>
			<div className={css["book-wrap"]}>
				{bookList.map((item, index) => (
					<BookItem {...item} key={index} />
				))}
			</div>
		</div>
	);
};
export default Readbook;
