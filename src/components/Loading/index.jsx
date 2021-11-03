import css from './index.module.scss'

import React, { Component } from 'react'

export default class Loading extends Component {
	render() {
		return (
			<div className={css['loading-wrap']}>
				<div className={css['loader']}>
					<div className={css['circle']}></div>
					<div className={css['circle']}></div>
					<div className={css['circle']}></div>
					<div className={css['circle']}></div>
					<div className={css['circle']}></div>
					<div className={css['circle']}></div>
				</div>
			</div>
		)
	}
}
