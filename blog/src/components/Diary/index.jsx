import diarystyle from './index.module.scss'

import React,{ Component } from 'react'

export default class Diary extends Component {
    render() {
        return <div className={ diarystyle["diary-wrap"] }>Diary组件</div>
    }
}