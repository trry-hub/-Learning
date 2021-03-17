import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class TodoList extends Component {
	state = {
		list: [
			{
				id: nanoid(),
				content: "内容1",
				checked: true,
				edit: true,
			},
			{
				id: nanoid(),
				content: "内容2",
				checked: false,
				edit: false,
			},
			{
				id: nanoid(),
				content: "内容3",
				checked: false,
				edit: false,
			},
			{
				id: nanoid(),
				content: "内容4",
				checked: false,
				edit: false,
			},
		],
	};

	onChange = (e) => {
		const { value } = e.target;
		if (value) {
			this.setState({
				inputVal: value.trim(),
			});
		}
	};

	// 添加
	onClick = () => {
		const { list, inputVal } = this.state;
		if (inputVal) {
			const newList = [
				...list,
				{ content: inputVal, id: nanoid(), checked: false },
			];
			this.setState({
				list: newList,
				inputVal: "",
			});
		} else {
			alert("请输入要新增的内容!");
		}
	};

	onCheckChange = (e, id) => {
		const { list } = this.state;
		const newList = list.map((item, i) => {
			if (item.id === id) return { ...item, checked: e.target.checked };
			return item;
		});
		this.setState({ list: newList });
	};

	// 删除
	onDelete = (e) => {
		const { list } = this.state;
		const newList = list.filter((item) => item.id !== e.target.dataset.id);
		this.setState({ list: newList });
	};

	// 编辑
	onEdit = (e, id) => {
		const { list } = this.state;
		const newList = list.map((item, i) => {
			if (item.id === id) return { ...item, checked: e.target.checked };
			return item;
		});
		this.setState({ list: newList });
	};

    // 保存
    onSave = () => {
        
    }

	render() {
		const { list, inputVal } = this.state;
		return (
			<div style={{ width: "600px", margin: "0 auto" }}>
				<h2 style={{ textAlign: "center" }}>TodoList</h2>
				<p style={{ display: "flex" }}>
					<input
						placeholder="请输入标题"
						style={{ flex: 1 }}
						onChange={this.onChange}
					/>
					<button style={{ marginLeft: "10px" }} onClick={this.onClick}>
						添加
					</button>
					<button style={{ marginLeft: "10px" }} onClick={this.onSearch}>
						查询
					</button>
				</p>
				<div>
					{list.map((item) => (
						<div
							key={item.id}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								borderBottom: "1px solid #CCCCCC",
								padding: "8px 5px",
							}}
						>
							<p
								style={{
									display: "flex",
									alignItems: "center",
									marginBottom: "0px",
								}}
							>
								<input
									onChange={(e) => this.onCheckChange(e, item.id)}
									type="checkbox"
									checked={item.checked}
									style={{ marginRight: "10px" }}
								/>
								{item.edit ? (
									<input
										style={{ width: "300px" }}
										defaultValue={item.content}
										onChange={this.onChange}
									/>
								) : (
									<span>{item.content}</span>
								)}
							</p>
							{item.checked && (
								<p
									style={{
										marginBottom: "0px",
									}}
								>
									<span
										onClick={(e) =>
											item.edit
												? this.onSave(e, item.id)
												: this.onEdit(e, item.id)
										}
										data-id={item.id}
										style={{
											cursor: "pointer",
											color: "#333",
											marginRight: "10px",
										}}
									>
										{item.edit ? "保存" : "编辑"}
									</span>
									<span
										onClick={this.onDelete}
										data-id={item.id}
										style={{ cursor: "pointer", color: "red" }}
									>
										删除
									</span>
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		);
	}
}
