import nav from "./index.module.scss";

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Button } from "antd";

const Nav = (props) => {
	// 初始化 satae
	const [navHeight, setNavHeight] = useState(0);
	const myRef = React.createRef();

	useEffect(() => {
		setNavHeight(myRef.current.offsetHeight);
	}, [myRef]);

	const { scrollTop, list, history } = props;
	return (
		<div style={{ height: `${navHeight}px` }}>
			<div
				className={`${nav["nav-wrap"]} ${scrollTop > 0 ? nav["shadow"] : ""}`}
				ref={myRef}
			>
				<div
					className={nav["left-grid"]}
					style={{ gridTemplateColumns: `repeat(${list.length + 1}, auto)` }}
				>
					<img
						className={`${nav["logo"]}`}
						src={require("@/assets/images/logo.gif").default}
						alt="trry"
						onClick={() => history.push("/")}
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
};

export default withRouter(Nav);
