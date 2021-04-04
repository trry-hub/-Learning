import nav from "./index.module.scss";

import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Button } from "antd";
import { navList } from "@/router";

import logo from "@/assets/images/logo.gif";

const Nav = (props) => {
	// 初始化 satae
	const [navHeight, setNavHeight] = useState(0);
	const myRef = useRef(null);
	const [list] = useState(navList);

	useEffect(() => {
		setNavHeight(myRef.current.offsetHeight);
	}, []);

	const { scrollTop, history } = props;
	return (
		<div className={nav["nav-wrapper"]} style={{ height: `${navHeight}px` }}>
			<div
				className={`${nav["nav-wrap"]} ${scrollTop > 0 ? nav["shadow"] : ""}`}
				ref={myRef}
			>
				<div className={nav["left-grid"]}>
					<img
						className={`${nav["logo"]}`}
						src={logo}
						alt="trry"
						onClick={() => history.push("/")}
					/>
					{list.map((item, index) => {
						return item.path.indexOf("http") === -1 ? (
							<NavLink
								to={{ pathname: item.path }}
								className={`${nav["btn"]}`}
								key={index}
							>
								{item.meta?.title}
							</NavLink>
						) : (
							<a
								className={`${nav["btn"]}`}
								target="_blank"
								href={item.path}
								rel="noreferrer noreferrer"
								key={index}
							>
								{item.meta?.title}
							</a>
						);
					})}
				</div>
				<div className={nav["right-grid"]}>
					<Button type="dashed">Primary</Button>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Nav);
