import trackstyle from './index.module.scss'

import React,{ Component } from 'react'

export default class Track extends Component {
    render() {
        return <div className={ trackstyle["track-wrap"] }>Track组件</div>
    }
}