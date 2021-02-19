import React, { PureComponent } from "react";
import './index.css'

export default class Header extends PureComponent {
	render() {
		return <div className="header">
			<input className="input" placeholder="请输入"/>
		</div>;
	}
}
