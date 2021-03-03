import nav from "./index.module.scss";

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

class Nav extends Component {
	// 初始化 satae
	state = {
		navHeight: 0,
	};
	myRef = React.createRef();

	componentDidMount = () => {
		const navHeight = this.myRef.current.offsetHeight;
		this.setState({
			navHeight,
		});
	};

	render() {
		const { navHeight } = this.state;
		const { scrollTop, list } = this.props;

		return (
			<div style={{ height: `${navHeight}px` }}>
				<div
					className={`${nav["nav-wrap"]} ${
						scrollTop >= navHeight ? nav["shadow"] : ""
					}`}
					ref={this.myRef}
				>
					<div
						className={nav["left-grid"]}
						style={{ gridTemplateColumns: `repeat(${list.length + 1}, auto)` }}
					>
						<img
							className={`${nav["logo"]} btn-NavLink`}
							src={require("@/assets/images/logo.gif").default}
							alt="trry"
						/>
						{list.map((item) => {
							return item.pathname.indexOf("http") === -1 ? (
								<NavLink
									to={{ pathname: item.pathname }}
									className={`btn btn-NavLink ${nav["btn"]}`}
									key={item.id}
								>
									{item.name}
								</NavLink>
							) : (
								<a
									className={`btn btn-NavLink ${nav["btn"]}`}
									target="_blank"
									href={item.pathname}
									rel="noreferrer noreferrer"
									key={item.id}
								>
									{item.name}
								</a>
							);
						})}
					</div>
					<div className={nav["right-grid"]}>
						<div className="btn btn-primary">Primary</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Nav);
