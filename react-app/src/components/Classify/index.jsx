import classifystyle from './index.module.scss'

import React,{ Component } from 'react'

export default class Classify extends Component {
    render() {
        return <div className={ classifystyle["classify-wrap"] }>Classify组件</div>
    }
}