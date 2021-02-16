import card from "./index.module.scss";

import React, { Component } from "react";
import Inof from "../Info";
import Mooto from "../Mooto";
import Study from "../Study";

export default class Card extends Component {
	render() {
		return (
			<div className={card["wrap"]}>
				<div className={card["item"]}>
					<Mooto />
				</div>
				<div className={card["item"]}>
					<Inof />
				</div>
				<div className={card["item"]}>
					<Study />
				</div>
			</div>
		);
	}
}
