import liststyle from "./index.module.scss";

import React, { PureComponent } from "react";
import Item from "./Item";

export default class List extends PureComponent {
	state = {
		list: [
			{
				title: "标题",
				synopsis: "简介",
				id: "001",
			},
			{
				title: "标题",
				synopsis: "简介",
				id: "002",
			},
			{
				title: "标题",
				synopsis: "简介",
				id: "003",
			},
			{
				title: "标题",
				synopsis: "简介",
				id: "004",
			},
			{
				title: "标题",
				synopsis: "简介",
				id: "0015",
			},
			{
				title: "标题",
				synopsis: "简介",
				id: "006",
			},
		],
	};
	render() {
		const { list } = this.state;
		return (
			<div className={liststyle["wrap"]}>
				{list.map((item) => {
                    return <Item key={item.id } {...item} />;
				})}
			</div>
		);
	}
}
