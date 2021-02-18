import infostyle from "./index.module.scss";

import React,{ Component } from "react";
import SvgIcon from "@/components/SvgIcon";

export default class Info extends Component {
	render() {
		return (
			<div className={infostyle["info-wrap"]}>
				<h1 className={infostyle["title"]}>联系方式</h1>
				<div className={infostyle["content"]}>
					<div className={infostyle["left"]}>
						<div className={infostyle["left-item"]}>
							<SvgIcon iconClass="qq-icon" />
							2103438487
						</div>
						<div>1510133782</div>
						<div>848014514</div>
					</div>
					<div className={infostyle["right"]}></div>
				</div>
			</div>
		);
	}
}
