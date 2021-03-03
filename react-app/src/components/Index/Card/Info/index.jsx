import infostyle from "./index.module.scss";

import React, { Component } from "react";
import SvgIcon from "@/components/SvgIcon";

export default class Info extends Component {
	state = {
		imgname: "2103438487",
	};
	mouseEvent = (e) => {
		// 鼠标移入事件
		const { imgname } = e.target.dataset;
		if (!imgname) return;
		this.setState({
			imgname,
		});
	};

	render() {
		const { imgname } = this.state;
		return (
			<div className={infostyle["info-wrap"]}>
				<h1 className={infostyle["title"]}>联系方式</h1>
				<div className={infostyle["content"]}>
					<div className={infostyle["left"]}>
						<div className={infostyle["left-item"]}>
							<SvgIcon iconClass="qq-icon" className={infostyle["qq-icon"]} />
							<div>
								<div
									className={`${infostyle["grid-item"]} ${
										imgname === "2103438487" ? infostyle["grid-item-act"] : ""
									}`}
									onMouseEnter={this.mouseEvent}
									data-imgname="2103438487"
								>
									- 2103438487
								</div>
								<div
									className={`${infostyle["grid-item"]} ${
										imgname === "1510133782" ? infostyle["grid-item-act"] : ""
									}`}
									onMouseEnter={this.mouseEvent}
									data-imgname="1510133782"
								>
									- 1510133782
								</div>
								<div
									className={`${infostyle["grid-item"]} ${
										imgname === "848014514" ? infostyle["grid-item-act"] : ""
									}`}
									onMouseEnter={this.mouseEvent}
									data-imgname="848014514"
								>
									- 848014514
								</div>
							</div>
						</div>
						<div className={infostyle["left-item"]}>
							<SvgIcon iconClass="wechat" className={infostyle["wechat"]} />
							<div>
								<div
									className={`${infostyle["grid-item"]} ${
										imgname === "Name-Terry" ? infostyle["grid-item-act"] : ""
									}`}
									onMouseEnter={this.mouseEvent}
									data-imgname="Name-Terry"
								>
									Name-Terry
								</div>
							</div>
						</div>
					</div>
					{/* 图片 */}
					<div className={infostyle["right"]}>
						{imgname ? (
							<div className={infostyle["wrap-icon"]}>
								<img
									className={infostyle["right-img"]}
									src={require("@/assets/images/" + imgname + ".png").default}
									alt={imgname}
								/>
							</div>
						) : (
							""
						)}
					</div>
				</div>

				<div className={infostyle["message-wrap"]}>
					<SvgIcon iconClass="message" className={infostyle["message"]} />
					<div className={infostyle["grid-item"]}>
						君不见高堂明镜悲白发，朝如青丝暮成雪
					</div>
				</div>
			</div>
		);
	}
}
