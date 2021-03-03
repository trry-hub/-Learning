import readbookstyle from './index.module.scss'

import React,{ Component } from 'react'

export default class Readbook extends Component {
    render() {
        return <div className={ readbookstyle["readbook-wrap"] }>Readbook组件</div>
    }
}