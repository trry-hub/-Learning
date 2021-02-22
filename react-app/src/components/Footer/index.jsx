import React,{ Component } from "react";
import './index.css'

export default class Footer extends Component {
	render() {
		return <div className="footer">©2020 <img src={require('@/assets/images/logo.gif')} alt="trry" /></div>;
	}
}
