import mootostyle from "./index.module.scss";

import React, { Component } from "react";
import SvgIcon from "@/components/SvgIcon";

export default class Mooto extends Component {
    render() {
        const mootoIcon = "mooto"
		return (
			<div className={mootostyle["mooto-wrap"]}>
				<h4 className={mootostyle["title"]}>天道酬勤</h4>
				<div className={mootostyle["content"]}>
					<SvgIcon className={mootostyle["mooto-icon"]} iconClass={mootoIcon} />
					<span>人生得意须尽欢，莫使金樽空对月。</span>
				</div>
			</div>
		);
	}
}
