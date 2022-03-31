<script setup lang="ts"></script>

<template>
	<div class="card shadow-xl cursor-pointer bg-slate-100">
		<div class="flex w-full h-full justify-center items-center min-h-[400px]">
			<img
				src="/src/assets/loading-buffering.gif"
				alt="teaserImage.alttext"
				class="w-8 h-8"
			/>
		</div>
		<div class="card-body">
			<!-- <div class="badge badge-secondary">{{ topline }}</div> -->
			<h2 class="card-title bg-slate-400">{{ 'title' }}</h2>
			<p class="bg-slate-400">{{ 'firstSentence' }}</p>
			<div class="card-actions justify-end">
				<div class="badge badge-outline bg-slate-400" v-for="tag in 'tags'">
					{{ tag }}
				</div>
			</div>
		</div>
	</div>
</template>
