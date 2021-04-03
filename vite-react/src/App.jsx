import style from "./app.module.scss";

import React from "react";
import { withRouter, Link } from "react-router-dom";

import SvgIcon from "@/components/SvgIcon";
import { entranceList } from "@/router";

const App = () => {
	return (
		<React.Fragment>
			<div className={style["bg"]}></div>
			<div className={style["body"]}>
				<div className={style["content"]}>
					{entranceList.map((item, i) => (
						<div key={i} className={style["item-wrap"]}>
							{item.path.indexOf("http") === -1 ? (
								<Link
									className={`${style["item"]} ${style[item.meta.icon]}`}
									to={item.path}
								>
									<SvgIcon
										iconClass={item.meta.icon}
										className={style["svg-icon"]}
									/>
								</Link>
							) : (
								<a
									href={item.path}
									target="_blank"
									rel="noopener noreferrer"
									className={`${style["item"]} ${style[item.meta.icon]}`}
								>
									<SvgIcon
										iconClass={item.meta.icon}
										className={style["svg-icon"]}
									/>
								</a>
							)}
							<div className={style["tooltip"]}>{item.meta.title}</div>
						</div>
					))}
				</div>
			</div>
			<footer className={style["footer"]}>
				<SvgIcon iconClass="xin" className={style["xin"]} />
				不要等待，时机永远不会恰到好处。——拿破仑·希尔
			</footer>
		</React.Fragment>
	);
};
export default withRouter(App);
