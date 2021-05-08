import css from './index.module.scss'

import React, { useState } from 'react'

import Item from '@/pages/blog/Index/components/Item'
import Info from '@/pages/blog/Index/components/Info'
import Saying from '@/pages/blog/Index/components/Saying'
import Study from '@/pages/blog/Index/components/Study'

const Index = () => {
    const navList = [
        {
            title: '标题',
            path: '/',
            synopsis: '简介'
        },
        {
            title: '标题',
            path: '/',
            synopsis: '简介'
        },
        {
            title: '标题',
            path: '/',
            synopsis: '简介'
        },
        {
            title: '标题',
            path: '/',
            synopsis: '简介'
        },
        {
            title: '标题',
            path: '/',
            synopsis: '简介'
        },
        {
            title: '标题',
            path: '/',
            synopsis: '简介'
        }
    ]
    const [list, setList] = useState(navList)

    return (
		<div className={css['wrap']}>
			<div className={css['list-wrap']}>
				{list.map((item, index) => {
					return <Item key={index} {...item} />
				})}
			</div>
			<div className={css['card-wrap']}>
				<div className={css['item']}>
					<Saying />
				</div>
				<div className={css['item']}>
					<Info />
				</div>
				<div className={css['item']}>
					<Study />
				</div>
			</div>
		</div>
	)
}

export default Index
