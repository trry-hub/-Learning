import nav from "./index.module.scss";

import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Button } from "antd";

class Nav extends PureComponent {
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
					className={`${nav["nav-wrap"]} ${scrollTop > 0 ? nav["shadow"] : ""}`}
					ref={this.myRef}
				>
					<div
						className={nav["left-grid"]}
						style={{ gridTemplateColumns: `repeat(${list.length + 1}, auto)` }}
					>
						<img
							className={`${nav["logo"]}`}
							src={require("@/assets/images/logo.gif").default}
							alt="trry"
							onClick={() => this.props.history.push("/")}
						/>
						{list.map((item, index) => {
							return item.pathname.indexOf("http") === -1 ? (
								<NavLink
									to={{ pathname: "/blog" + item.pathname }}
									className={`${nav["btn"]}`}
									key={index}
								>
									{item.name}
								</NavLink>
							) : (
								<a
									className={`${nav["btn"]}`}
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
						<Button type="primary">Primary</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Nav);
