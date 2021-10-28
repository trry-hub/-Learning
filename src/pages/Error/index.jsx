import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div id="page-wrapper">
			<h1>出错啦！</h1>
			<div className="row" style={{ marginTop: "30px" }}>
				<div className="col-md-12">
					<span>页面被狗狗叼走啦～～～</span>
					<Link to="/index">点我返回首页</Link>
				</div>
			</div>
		</div>
	);
};

export default Error;
