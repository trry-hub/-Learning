import css from "./index.module.scss";

import React from "react";
import { Link} from 'react-router-dom'

const Resource = () => {
	return (
		<div className={css["resource-wrap"]}>
			<div className={`${css["saying"]} ${css["item"]}`}>
				最淡的墨水也胜过最强的记忆.
			</div>
			<div className={`${css["item"]}`}>
				<h5>优秀文章</h5>
				<div className={css["article-item"]}>
					<Link to="/">标题</Link>
					<span className={css["author"]}>作者：程晓明</span>
				</div>
				<div className={css["article-item"]}>
					<Link to="/">标题</Link>
					<span className={css["author"]}>作者：程晓明</span>
				</div>
				<div className={css["article-item"]}>
					<Link to="/">标题</Link>
					<span className={css["author"]}>作者：程晓明</span>
				</div>
			</div>
			<div className={`${css["item"]}`}>
				<h5>Font Awesome 一套绝佳的图标字体库和CSS框架</h5>
				<div className={css["article-item"]}>
					<Link to="/">http://fontawesome.dashgame.com</Link>
				</div>
			</div>
			<div className={`${css["item"]}`}>
				<h5>测试响应不同设备分辨率的网站</h5>
				<div className={css["article-item"]}>
					<Link to="/">http://www.responsinator.com</Link>
				</div>
			</div>
		</div>
	);
};
export default Resource;
