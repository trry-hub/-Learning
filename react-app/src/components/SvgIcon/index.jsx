import svgstyle from "./index.module.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SvgIcon extends PureComponent {
	static propTypes = {
		// svg名字
		iconClass: PropTypes.string.isRequired,
		// 填充颜色
		fill: PropTypes.string,
		className: PropTypes.string,
	};
	static defaultProps = {
		fill: "currentColor",
		className: "",
	};
	render() {
		const { iconClass, fill, className } = this.props;
		return (
			<svg className={`${svgstyle["svg-class"]} ${className}`}>
				<use xlinkHref={"#icon-" + iconClass} fill={fill} />
			</svg>
		);
	}
}
