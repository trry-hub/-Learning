import css from "./index.module.scss";

import React from "react";
import {Link} from 'react-router-dom'
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const Archive = props =>  {
		return (
			<div className={css["archive"]}>
				<div className={css["wrap"]}>
					<Timeline>
						<Timeline.Item className={css["item"]}>
							<p className={css["year"]}>2015</p>
							<span className={css["date"]}>09-01</span>
							<ul className={css["content"]}>
								<li>
									<Link to="/blog/archive">Create a services site</Link>
								</li>
							</ul>
						</Timeline.Item>
						<Timeline.Item className={css["item"]}>
							<p className={css["year"]}>2015</p>
							<span className={css["date"]}>09-01</span>
							<ul className={css["content"]}>
								<li>
									<Link to="/blog/archive">Solve initial network problems</Link>
								</li>
							</ul>
						</Timeline.Item>
						<Timeline.Item
							dot={<ClockCircleOutlined className="timeline-clock-icon" />}
							color="red"
							className={css["item"]}
						>
							<p className={css["year"]}>2015</p>
							<span className={css["date"]}>09-01</span>
							<ul className={css["content"]}>
								<li>
									<Link to="/blog/archive">Technical testing</Link>
								</li>
							</ul>
						</Timeline.Item>
						<Timeline.Item className={css["item"]}>
							<p className={css["year"]}>2015</p>
							<span className={css["date"]}>09-01</span>
							<ul className={css["content"]}>
								<li>
									<Link to="/blog/archive">Network problems being solved</Link>
								</li>
							</ul>
						</Timeline.Item>
					</Timeline>
				</div>
			</div>
		);
}

export default Archive