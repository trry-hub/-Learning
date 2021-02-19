import item from "./index.module.scss";

import React,{ PureComponent } from "react";

export default class Item extends PureComponent {
    render() {
        const { title, synopsis } = this.props;
		return (
			<div className={item["item-wrap"]}>
                <span className={item["title"]}>{title}</span>
                <div className={item["synopsis"]}>{synopsis}</div>
                <span className={item["more"]}>显示更多</span>
			</div>
		);
	}
}
