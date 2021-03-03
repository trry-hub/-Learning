import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "@/containers/Layout";

import { MyContext } from "@/util/context-manager";

import Error from "@/pages/Error";
export class App extends Component {
	state = {
		documentHeight: 0,
	};
	bodyRef = React.createRef(0);

	componentDidMount() {
		this.setState({
			documentHeight: this.bodyRef.current.offsetHeight,
		});
	}

	render() {
		const { documentHeight } = this.state;
		return (
			<div className="body" ref={this.bodyRef}>
				<MyContext.Provider value={{ documentHeight }}>
					<Switch>
						<Route path="/" component={Layout}></Route>
						<Route component={Error}></Route>
					</Switch>
				</MyContext.Provider>
			</div>
		);
	}
}
