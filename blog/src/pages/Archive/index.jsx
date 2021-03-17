import css from "./index.module.scss";

import React, { Component } from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

export default class Archive extends Component {
	render() {
		return (
			<div className={css["archive"]}>
				<div className={css["wrap"]}>
					<Timeline>
						<Timeline.Item className={css["item"]}>
							<p className={css["year"]}>2015</p>
							<span className={css["date"]}>09-01</span>
							<ul className={css["content"]}>
								<li>Create a services site</li>
							</ul>
						</Timeline.Item>
						<Timeline.Item>
							Solve initial network problems 2015-09-01
						</Timeline.Item>
						<Timeline.Item
							dot={<ClockCircleOutlined className="timeline-clock-icon" />}
							color="red"
						>
							Technical testing 2015-09-01
						</Timeline.Item>
						<Timeline.Item>
							Network problems being solved 2015-09-01
						</Timeline.Item>
					</Timeline>
				</div>
			</div>
		);
	}
}
