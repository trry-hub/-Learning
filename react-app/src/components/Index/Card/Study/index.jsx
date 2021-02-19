import studystyle from './index.module.scss'

import React,{ PureComponent } from 'react'

export default class Study extends PureComponent {
    render() {
        return <div className={ studystyle["study-wrap"] }>Study组件</div>
    }
}