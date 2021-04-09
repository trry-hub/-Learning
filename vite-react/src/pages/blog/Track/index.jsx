import css from "./index.module.scss";

import React, { Component } from "react";
import { Button, Badge, Card } from "antd";

export default class Track extends Component {
	render() {
		return (
			<div className={css["track-wrap"]}>
				<h2 className={css["title"]}>为什么要登山，因为山就在那里</h2>
				<hr />
				<div className={css["time-line"]}>
					<div className={css["item"]}>
						<Button type="primary">2021</Button>
						<ul>
							<li>
								<div className={css["left"]}>
									<Card
										hoverable
										style={{ width: 240 }}
										cover={
											<img
												alt="example"
												src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
											/>
										}
									>
										<Card.Meta
											title="Europe Street beat"
											description="www.instagram.com"
										/>
									</Card>
								</div>
								<div className={css["center"]}>
									<Badge count="5月20" />
								</div>
								<div className={css["right"]}></div>
							</li>
							<li>
								<div className={css["left"]}></div>
								<div className={css["center"]}>
									<Badge count="5月21" />
								</div>
								<div className={css["right"]}>
									<Card
										hoverable
										style={{ width: 240 }}
										cover={
											<img
												alt="example"
												src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
											/>
										}
									>
										<Card.Meta
											title="Europe Street beat"
											description="www.instagram.com"
										/>
									</Card>
								</div>
							</li>
						</ul>
					</div>
					<div className={css["item"]}>
						<Button type="primary">2021</Button>
						<ul>
							<li>
								<div className={css["left"]}>123</div>
								<div className={css["center"]}>
									<Badge count={true ? 25 : 0} />
								</div>
								<div className={css["right"]}>
									<Card
										hoverable
										style={{ width: 240 }}
										cover={
											<img
												alt="example"
												src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
											/>
										}
									>
										<Card.Meta
											title="Europe Street beat"
											description="www.instagram.com"
										/>
									</Card>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
