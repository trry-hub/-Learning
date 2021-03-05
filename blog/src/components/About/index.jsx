import aboutstyle from './index.module.scss'

import React,{ Component } from 'react'

export default class About extends Component {
    render() {
        return <div className={ aboutstyle["about-wrap"] }>About组件</div>
    }
}