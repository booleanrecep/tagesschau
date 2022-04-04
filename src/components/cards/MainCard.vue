<script setup lang="ts">
import { onMounted, ref, Ref, watch } from 'vue'
import { Spinner } from '~/components'

defineProps<{
	teaserImage?: any
	firstSentence?: string
	title?: string
	tags?: { tag: '' }[]
	topline?: string
	externalId?: string
}>()

let breakPoint: Ref<string | undefined> = ref('')
let windowWidth: Ref<number> = ref(window.innerWidth)

interface IBreakPoints {
	[key: string]: number
}

watch(windowWidth, () => {
	getBreakPoint()
})

const imageBreakPoints: IBreakPoints = {
	klein1x1: 360,
	mittelgross1x1: 768,
	portraetgross8x9: 992,
	portraetgrossplus8x9: 3200,
}

const getBreakPoint = () => {
	const bPointInt = Object.values(imageBreakPoints).find(
		(v) => v > windowWidth.value
	)
	const bPointStr = Object.keys(imageBreakPoints)
		.reverse()
		.find((k) => (imageBreakPoints[k] === bPointInt ? k : ''))
	breakPoint.value = bPointStr
}

onMounted(() => {
	getBreakPoint()
	window.addEventListener('resize', () => {
		windowWidth.value = window.innerWidth
	})
})
</script>

<template>
	<div class="card bg-base-100 shadow-xl cursor-pointer" :key="externalId">
		<figure v-if="teaserImage[`${breakPoint}`].imageurl">
			<img
				:src="teaserImage[`${breakPoint}`].imageurl"
				:alt="teaserImage.alttext"
				class="w-full max-w-[90%]"
			/>
		</figure>
		<Spinner v-else />
		<div class="card-body">
			<!-- <div class="badge badge-secondary">{{ topline }}</div> -->
			<h2 class="card-title">{{ title }}</h2>
			<p>{{ firstSentence }}</p>
			<div class="card-actions justify-end">
				<div class="badge badge-outline" v-for="tag in tags?.slice(0, 3)">
					{{ tag.tag }}
				</div>
				<div v-if="tags!.length > 3 " class="badge badge-outline">...</div>
			</div>
		</div>
	</div>
</template>
