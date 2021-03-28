import resourcestyle from './index.module.scss'

import React,{ Component } from 'react'

export default class Resource extends Component {
    render() {
        return <div className={ resourcestyle["resource-wrap"] }>Resource组件</div>
    }
}