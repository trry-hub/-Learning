import style from "./app.module.scss";

import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Scrollbar from "@/components/Scrollbar";

import SvgIcon from "@/components/SvgIcon";
import { MyContext } from "@/utils/context-manager";

class App extends Component {
	state = {
		documentHeight: 0,
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				documentHeight: document.body.scrollHeight,
			});
		}, 2000);
	}

	// 跳转页面
	toPage = (path) => {
		if (path.indexOf("http") === -1) {
			this.props.history.push(path);
		} else {
			window.location.href = path;
		}
	};

	render() {
		const { documentHeight } = this.state;
		return (
			<React.Fragment>
				<Scrollbar>
					<div className={style["bg"]}></div>
					<div className={style["body"]}>
						<MyContext.Provider value={{ documentHeight }}>
							<div className={style["content"]}>
								<div className={style["item-wrap"]}>
									<Link
										className={`${style["item"]} ${style["home"]}`}
										to="/blog"
									>
										<SvgIcon iconClass="home" className={style["svg-icon"]} />
									</Link>
									<div className={style["tooltip"]}>Blog</div>
								</div>
								<div className={style["item-wrap"]}>
									<a
										href="https://github.com/Name-Terry"
										target="_blank"
										rel="noopener noreferrer"
										className={`${style["item"]} ${style["github"]}`}
									>
										<SvgIcon iconClass="github" className={style["svg-icon"]} />
									</a>
									<div className={style["tooltip"]}>GitHub</div>
								</div>
								<div className={style["item-wrap"]}>
									<a
										href="tencent://message/?uin=2103438487&Site=qq&Menu=yes"
										target="_blank"
										rel="noopener noreferrer"
										className={`${style["item"]} ${style["qq"]}`}
									>
										<SvgIcon iconClass="qq" className={style["svg-icon"]} />
									</a>
									<div className={style["tooltip"]}>QQ</div>
								</div>
								<div className={style["item-wrap"]}>
									<div className={`${style["item"]} ${style["xin"]}`}>
										<SvgIcon iconClass="xin" className={style["svg-icon"]} />
									</div>
									<div className={style["tooltip"]}>Diary</div>
								</div>
								<div className={style["item-wrap"]}>
									<a
										href="https://www.youtube.com/"
										target="_blank"
										rel="noopener noreferrer"
										className={`${style["item"]} ${style["youtube"]}`}
									>
										<SvgIcon
											iconClass="youtube"
											className={style["svg-icon"]}
										/>
									</a>
									<div className={style["tooltip"]}>YouTube</div>
								</div>
								<div className={style["item-wrap"]}>
									<div className={`${style["item"]} ${style["facebook"]}`}>
										<SvgIcon
											iconClass="facebook"
											className={style["svg-icon"]}
										/>
									</div>
									<div className={style["tooltip"]}>FaceBook</div>
								</div>
							</div>
						</MyContext.Provider>
					</div>
					<footer className={style["footer"]}>
						<SvgIcon iconClass="xin" className={style["xin"]} />
						不要等待，时机永远不会恰到好处。——拿破仑·希尔
					</footer>
				</Scrollbar>
			</React.Fragment>
		);
	}
}
export default withRouter(App);
