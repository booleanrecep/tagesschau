import { acceptHMRUpdate, defineStore } from 'pinia'
import { service } from '../../api'

interface Newsdata {
	data: string
	externalId: string
	firstSentence: string
	tags: object[]
	teaserImage: {}
	title: string
	topline: string
	type: string
}

export const useTagesschau = defineStore('tagesschau', {
	state: () => ({
		newsData: [] as Newsdata[],
	}),

	getters: {
		news: (state) => {
			return state.newsData
		},
	},

	actions: {
		async getData() {
			const res = await service.get('news')
			this.newsData = res.data.news
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useTagesschau, import.meta.hot))
}
