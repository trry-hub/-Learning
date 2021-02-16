import content from './index.module.scss'

import React,{ Component } from 'react'

import List from '../List'
import Card from "../Card";

export default class Content extends Component {
    render() {
        return <div className={content["wrap"]}>
            <List />
            <Card />
        </div>;
    }
}
