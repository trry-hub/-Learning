import React, { Component, Fragment } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			name: "小红",
            age: 18,
            html: '<h1>你好，我是富文本内容</h1>',
			list: [
				{
					name: "张三",
				},
				{
					name: "张1",
				},
				{
					name: "张2",
				},
				{
					name: "张3",
				},
				{
					name: "张4",
				},
			],
		};
	}
	inputChange(index, ...[e]) {
        // let { value } = e.target;
		// this.setState({
		// list: value
		// });
	}
	render() {
		return (
			<Fragment>
				<ul className="my-list">
					{/* 这是一个注释 */}
					<li>{false ? "" : "trry"}</li>
					<li>
						<div dangerouslySetInnerHTML={{__html:this.state.html}}></div>
						{this.state.name}
						{this.state.age}
						<label htmlFor="trry">加入服务：</label>
						<input
							id="trry"
							value={this.state.name}
							onChange={this.inputChange.bind(this)}
						></input>
					</li>
					{/* list是一个数组 */}
					{this.state.list.map((item, index) => {
						return (
							<li key={index}>
								<label htmlFor={index}>{item.name}</label>
								<input
									id={index}
									value={item.name}
									onChange={this.inputChange.bind(this, index)}
								></input>
							</li>
						);
					})}
				</ul>
			</Fragment>
		);
	}
}
export default App;
