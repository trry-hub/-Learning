import studystyle from './index.module.scss'

import React,{ Component } from 'react'

export default class Study extends Component {
    render() {
        return <div className={ studystyle["study-wrap"] }>Study组件</div>
    }
}