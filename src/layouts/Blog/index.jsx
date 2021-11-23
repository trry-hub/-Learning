// 引入css样式
import css from './index.module.scss'

// 引入三方库
import React, { Suspense, lazy, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

// 引入组件
import Loading from '@/components/Loading'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SvgIcon from '@/components/SvgIcon'
// 引入actions
import { setScroll } from '@/redux/actions/blog-layout'
import { blog } from '@/router/blog'

import { useScrollHeight, useReStoreScrollTop } from '@/utils'


const RouterView = lazy(() => import('@/components/RouterView'))

// Blog UI组件
const Blog = (props) => {
	useReStoreScrollTop()
	const goTop = () => {
		document.body.scrollIntoView()
	}
	const scrollTop = useScrollHeight()
	return (
		<Fragment>
			<Suspense fallback={<Loading />}>
				<div className={css['layout-wrap']}>
					<Nav scrollTop={scrollTop} />
					<div className={css['layout-content']}>
						<RouterView routers={blog} />
					</div>
					<Footer scrollTop={scrollTop} />
				</div>
				<div
					className={`${scrollTop > 100 ? css['show-icon'] : css['go-top']}`}
					onClick={goTop}
				>
					<SvgIcon className={css['go-top-icon']} iconClass="goTop" />
				</div>
			</Suspense>
		</Fragment >
	)
}

// redux中状态映射到props中
const mapStateToProps = (state) => {
	return { ...state }
}

// redux中操作状态的方法映射到props中
const mapDispatchToProps = {
	setScroll
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
