import coursestyle from './index.module.scss'

import React,{ Component } from 'react'

export default class Course extends Component {
    render() {
        return <div className={ coursestyle["course-wrap"] }>Course组件</div>
    }
}