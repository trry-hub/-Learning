import React, { Component } from "react";
import Editor from "for-editor";

export default class Edit extends Component {
	state = {
		value: "",
		options: {
			height: document.documentElement.clientHeight - 120 + "px",
			preview: true,
			subfield: true,
		},
	};

	handleChange = (value) => {
		this.setState({
			value,
		})
	}
	addImg = ($file) => {
		console.log($file)
		console.log(this.$vm)
		
		// this.$vm.current.$img2Url($file.name, "file_url");
	}

	render() {
		const { value, options } = this.state;
		return (
			<Editor
				ref={this.$vm}
				{...options}
				value={value}
				addImg={this.addImg}
				onChange={this.handleChange}
			/>
		);
	}
}

