import svgstyle from "./index.module.scss";

import React from "react";
import PropTypes from "prop-types";
import styles from "./style.less"; //已启用 CSS Modules
export default class SvgIcon extends Component {
	render() {
		const { iconClass, fill } = this.props;
		return (
			<i aria-hidden="true" className="anticon">
				<svg className={svgstyle["svg-class"]}>
					<use xlinkHref={"#icon-" + iconClass} fill={fill} />
				</svg>
			</i>
		);
	}
}
SvgIcon.propTypes = {
	// svg名字
	iconClass: PropTypes.string.isRequired,
	// 填充颜色
	fill: PropTypes.string,
};
SvgIcon.defaultProps = {
	fill: "currentColor",
};
