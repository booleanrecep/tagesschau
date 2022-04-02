<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { XIcon, VideoCameraIcon } from '@heroicons/vue/outline'
import tagesschauLogo from '~/assets/tagesschauLogo.svg'
defineProps<{
	show?: Boolean
}>()
const emit = defineEmits(['close'])
</script>

<template>
	<div
		class="w-full h-full absolute flex justify-center top-0 z-30 border-zinc-900 bg-slate-50 border-2 p-20"
		v-if="show"
	>
		<div class="flex flex-col h-[80%] w-[80%] justify-between">
			<div class="top w-full flex justify-end">
				<XIcon class="w-12 cursor-pointer" @click="emit('close')" />
			</div>
			<div class="middle w-full h-96 flex justify-center">
				<img :src="tagesschauLogo" class="h-96" />
			</div>
			<div class="bottom flex justify-between mt-6 h-28">
				<div class="flex flex-col justify-between">
					<div>
						<p class="text-2xl">
							<span class="bg-emerald-600 uppercase rounded p-2">Video</span>
							tagesschau 20 Uhr
						</p>
						<p class="text-slate-400 text-2xl mt-3">02.04.2022, 20:00 Uhr</p>
					</div>
					<div class="empty h-8"></div>
				</div>
				<div class="flex flex-col justify-between">
					<div class="empty h-4"></div>
					<div
						class="flex items-center bg-slate-400 px-20 w-full rounded text-2xl cursor-pointer"
					>
						<p class="whitespace-nowrap mr-2">Weitere sendung</p>
						<VideoCameraIcon class="w-12 h-12" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style></style>
