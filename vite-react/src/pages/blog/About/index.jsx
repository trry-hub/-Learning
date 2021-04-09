import css from "./index.module.scss";

import React from "react";

const About = () => {
	return (
		<div className={css["about-wrap"]}>
			<h4>理想的工作环境</h4>
			<div className={css["tag-list"]}>
				<p>高配的电脑</p>
				<p>超快的网速</p>
				<p>宽松的环境</p>
				<p>很少的会议</p>
				<p>整洁的代码</p>
			</div>
			<h4>关于博客</h4>
			<div className={css["tag-list"]}>
				<p>将来的你，一定会感激现在拼命努力的自己。</p>
			</div>
			<h4>关于友链</h4>
			<div className={css["tag-list"]}>
				<p>活在世上，无非就是想明白一些道理，然后过完这一生。</p>
				<p>正在努力做个更好的人。</p>
			</div>
			<h4>关于她</h4>
			<div className={css["tag-list"]}>
				<p>......</p>
			</div>
			<h4>关于未来</h4>
			<div className={css["tag-list"]}>
				<p>不乱于心，不困于情，不畏将来，不念过去。</p>
			</div>
		</div>
	);
};

export default About;
