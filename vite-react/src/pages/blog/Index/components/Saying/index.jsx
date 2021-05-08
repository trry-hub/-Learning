import css from './index.module.scss'

import React from 'react'
import SvgIcon from '@/components/SvgIcon'

const Saying = () => {
	return (
		<div className={css['saying-wrap']}>
			<h4 className={css['title']}>天道酬勤</h4>
			<div className={css['content']}>
				<SvgIcon className={css['saying-icon']} iconClass="saying" />
				<span>人生得意须尽欢，莫使金樽空对月。</span>
			</div>
		</div>
	)
}

export default Saying
