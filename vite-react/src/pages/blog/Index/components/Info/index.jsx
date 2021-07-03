import infostyle from "./index.module.scss";

import React, { useState, useEffect } from "react";
import SvgIcon from "@/components/SvgIcon";

const Info = () => {
	const list = [
		{
			type: "qq-icon",
			child: ["2103438487", "1510133782", "848014514"],
		},
		{
			type: "wechat",
			child: ["Name-Terry"],
		},
	];
	const [imgName, setImgName] = useState("2103438487");

	useEffect(() => {
		mouseEnter();
	}, []);

	const mouseEnter = (id = imgName) => {
		setImgName(id)
	}

	return (
		<div className={infostyle['info-wrap']}>
			<h1 className={infostyle['title']}>联系方式</h1>
			<div className={infostyle['content']}>
				<div className={infostyle['left']}>
					{list.map((item, index) => (
						<div className={infostyle['left-item']} key={index}>
							<SvgIcon iconClass={item.type} className={infostyle[item.type]} />
							<div>
								{item.child.map((childItem, childIndex) => (
									<div
										key={childIndex}
										className={`${infostyle['grid-item']} ${
											imgName === childItem ? infostyle['grid-item-act'] : ''
										}`}
										onMouseEnter={() => mouseEnter(childItem)}
									>
										{childItem}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				{/* 图片 */}
				<div className={infostyle['right']}>
					<div className={infostyle['wrap-icon']}>
						<img
							className={infostyle['right-img']}
							src={import.meta.globEager(`/src/assets/images/${imgName}.png`).defalut}
							alt={imgName}
						/>
					</div>
				</div>
			</div>
			<div className={infostyle['message-wrap']}>
				<SvgIcon iconClass="message" className={infostyle['message']} />
				<div className={infostyle['grid-item']}>君不见高堂明镜悲白发，朝如青丝暮成雪</div>
			</div>
		</div>
	)
};

export default Info;
