import postsstyle from './index.module.scss'

import React,{ Component } from 'react'

export default class Posts extends Component {
    render() {
        return <div className={ postsstyle["posts-wrap"] }>Posts组件</div>
    }
}