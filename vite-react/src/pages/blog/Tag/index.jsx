import css from "./index.module.scss";

import React, { useState } from "react";

const Tag = () => {
	const [count, setCount] = useState(0);
	const click = (count) => {
		setCount(++count);
	};
	return (
		<div className={css["tag-wrap"]} onClick={() =>click(count)}>
			Tag组件{count}
		</div>
	);
};
export default Tag;
