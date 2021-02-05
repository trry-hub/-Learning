import React,{ Component } from "react";
import './index.css'

export default class Item extends Component {
	render() {
		return (
			<div className="item">
				<div className="item-content">
					<input type="checkbox" />
					<div className="content">XXXX</div>
				</div>
				<button className="button">删除</button>
			</div>
		)
	}
}
