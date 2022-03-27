import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [{ path: '/', component: Home }] as RouteRecordRaw[]

export const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})
