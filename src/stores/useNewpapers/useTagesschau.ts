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
		tags: (state) => {
			let tags = state.newsData.map((n) => n.tags)
			tags = tags.map((__t: any) => __t.map((_t: any) => _t.tag.toLowerCase()))
			const tagsArr: any = []
			for (let t of tags) {
				for (let i = 0; i < t.length; i++) {
					if (!tagsArr.includes(t[i])) {
						tagsArr.push(t[i])
					}
				}
			}
			return tagsArr
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
