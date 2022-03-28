<script setup lang="ts">
defineProps<{
	teaserImage?: any
	firstSentence?: string
	title?: string
	tags?: { tag: '' }[]
	topline?: string
	externalId?: string
}>()
</script>

<template>
	<div class="card w-96 bg-base-100 shadow-xl" :key="externalId">
		<figure>
			<img :src="teaserImage.klein1x1.imageurl" :alt="teaserImage.alttext" />
		</figure>
		<div class="card-body">
			<div class="badge badge-secondary">{{ topline }}</div>
			<h2 class="card-title">
				{{ title }}
			</h2>
			<p>{{ firstSentence }}</p>
			<div class="card-actions justify-end">
				<div class="badge badge-outline" v-for="tag in tags">{{ tag.tag }}</div>
			</div>
		</div>
	</div>
</template>
