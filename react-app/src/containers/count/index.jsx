import React, { Component } from "react";
import { connect } from "react-redux";

import { add, createDecrementAction } from "@/redux/actions/count";

class Count extends Component {
	add = () => {
		this.props.add(1);
	};
	render() {
		const { count } = this.props.state;
		return (
			<div>
				<h3>这是redux中的值: {count}</h3>
				<button onClick={this.add}>加一个</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { state };
};

const mapDispatchToProps = {
	add,
	createDecrementAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
