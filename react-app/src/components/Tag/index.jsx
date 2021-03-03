import tagstyle from './index.module.scss'

import React,{ Component } from 'react'

export default class Tag extends Component {
    render() {
        return <div className={ tagstyle["tag-wrap"] }>Tag组件</div>
    }
}