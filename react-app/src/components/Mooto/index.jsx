import mootostyle from './index.module.scss'

import React,{ Component } from 'react'

import jingjuicon from './jingju.svg'

export default class Mooto extends Component {
    render() {
        return <div className={mootostyle["mooto-wrap"]}>
            <div className={mootostyle["title"]}>
                天道酬勤
            </div>
            <div>
                <Svg iconClass="mooto-icon"/><span>内容</span>
            </div>
        </div>
    }
}