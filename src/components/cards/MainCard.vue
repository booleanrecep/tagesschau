<script setup lang="ts">
import { onMounted, ref, Ref, watch } from 'vue'

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
	portraetgrossplus8x9: 1200,
}

const getBreakPoint = () => {
	const bPointInt = Object.values(imageBreakPoints).find(
		(v) => v > windowWidth.value
	)
	const bPointStr = Object.keys(imageBreakPoints)
		.reverse()
		.find((k) =>
			imageBreakPoints[k] === bPointInt ? k : 'portraetgrossplus8x9'
		)
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
	<div
		class="card w-full bg-base-100 shadow-xl cursor-pointer"
		:key="externalId"
	>
		<figure>
			<img
				:src="teaserImage[`${breakPoint}`].imageurl"
				:alt="teaserImage.alttext"
				class="w-full"
			/>
		</figure>
		<div class="card-body">
			<div class="badge badge-secondary">{{ topline }}</div>
			<h2 class="card-title">{{ title }}</h2>
			<p>{{ firstSentence }}</p>
			<div class="card-actions justify-end">
				<div class="badge badge-outline" v-for="tag in tags">{{ tag.tag }}</div>
			</div>
		</div>
	</div>
</template>
