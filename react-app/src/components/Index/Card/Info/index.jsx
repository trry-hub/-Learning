import infostyle from './index.module.scss'

import React,{ Component } from 'react'

export default class Info extends Component {
    render() {
        return <div className={infostyle["info-wrap"]}>Info组件</div>;
    }
}