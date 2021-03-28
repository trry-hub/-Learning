import css from './index.module.scss'

import React,{ Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

export default class Scrollbar extends Component {
    render() {
        return <Scrollbars
        onScroll={this.handleScroll}
        onScrollFrame={this.handleScrollFrame}
        onScrollStart={this.handleScrollStart}
        onScrollStop={this.handleScrollStop}
        onUpdate={this.handleUpdate}
        renderView={this.renderView}
        renderTrackHorizontal={this.renderTrackHorizontal}
        renderTrackVertical={this.renderTrackVertical}
        renderThumbHorizontal={this.renderThumbHorizontal}
        renderThumbVertical={this.renderThumbVertical}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight={false}
        autoHeightMin={0}
        thumbMinSize={30}
        universal={true}
        {...this.props} />
    }
}