import type { App } from 'vue'

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'dashboard',
		component: () => import('@/views/dashboard/index.vue'),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/about/index.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
	strict: true,
	scrollBehavior: async (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition
		} else {
			if (to.matched.every((record, i) => from.matched[i] !== record)) {
				return { left: 0, top: 0 }
			}
			return false
		}
	},
})

export function setupRoutes(app: App<Element>): void {
	app.use(router)
}

export default router
