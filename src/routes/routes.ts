import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import Home from '~/pages/Home.vue'
import FilteredTab from '~/pages/FilteredTab.vue'
import NewsDetails from '~/pages/NewsDetails.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/tabs/:tab', component: FilteredTab },
	{ path: '/news/:newsId', component: NewsDetails },
] as RouteRecordRaw[]

export const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})
