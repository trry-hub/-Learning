// 引入css样式
import css from './index.module.scss'

// 引入三方库
import React, { useState, useMemo, useRef, Suspense, lazy, Fragment } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Loading from '@/components/Loading'
import Scrollbar from '@/components/Scrollbar'
// 引入组件
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SvgIcon from '@/components/SvgIcon'
// 引入actions
import { setScroll } from '@/redux/actions/blog-layout'
import { blog } from '@/router/blog'

const RouterView = lazy(() => import('@/components/RouterView'))

import Index from '@/pages/blog/Index'
import Tag from '@/pages/blog/Tag'

// Blog UI组件
const Blog = (props) => {
	const [scrollTop, setScrollTop] = useState(0)
	const scrollbars = useRef()
	/*监听滚动*/
	const onScroll = (e) => {
		setScrollTop(scrollbars.current.getScrollTop())
		if (e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight) {
			// 滚动到底部需要做的事情
			console.log('dao di le')
		}
	}

	return (
		<Fragment>
			<div className={css['layout-wrap']}>
				<Nav scrollTop={scrollTop} />
				<div className={css['layout-content']}>
					<Suspense fallback={<Loading />}>
						<Scrollbar
							ref={scrollbars}
							hideTracksWhenNotNeeded={true}
							universal={true}
							onScroll={onScroll}
						>
							{/* {
								<Switch>
									<Route
										path="/blog/index"
										exact={true}
										render={() => <Index />}
									></Route>
									<Route path="/blog/tag" render={() => <Tag />}></Route>
								</Switch>
							} */}
							{useMemo(
								() => (
									<Switch>
										<RouterView routers={blog} />
									</Switch>
								),
								[]
							)}
						</Scrollbar>
					</Suspense>
				</div>
				<Footer scrollTop={scrollTop} />
			</div>
			<div
				className={`${scrollTop > 100 ? css['show-icon'] : css['go-top']}`}
				onClick={() => scrollbars.current.scrollToTop()}
			>
				<SvgIcon className={css['go-top-icon']} iconClass="goTop" />
			</div>
		</Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Blog))
