import React,{ PureComponent } from "react";
import './index.css'

export default class Footer extends PureComponent {
	render() {
		return (
			<div className="footer">
				<div className="footer-content">
					<input type="checkbox" />
					<span>已完成 / 全部2</span>
				</div>
				<button className="footer-button">清楚已完成任务</button>
			</div>
		);
	}
}
