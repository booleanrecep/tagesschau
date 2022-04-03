<script setup lang="ts">
import { onMounted, onUnmounted, Ref, ref } from 'vue'
import {
	MainCard,
	MainHeader,
	HorizontalTabs,
	Spinner,
	Broadcast,
} from '~/components'
import { useTagesschau } from '../stores/useNewpapers/useTagesschau'

const tagesschau: any = useTagesschau()
const countToLoad: Ref<number> = ref(9)
const closeModal: Ref<boolean> = ref(false)

onMounted(() => {
	tagesschau.getData()
	window.addEventListener('scroll', loadMore)
})

onUnmounted(() => {
	window.removeEventListener('scroll', loadMore)
})

const loadMore = () => {
	const diff = Math.abs(
		Math.floor(document.documentElement.scrollTop + window.innerHeight) -
			document.documentElement.offsetHeight
	)
	if (diff < 2) {
		countToLoad.value += 9
	}
}

const close = () => {
	closeModal.value = false
	document.body.style.overflow = 'scroll'
}
const open = () => {
	closeModal.value = true
	document.body.style.overflow = 'hidden'
}

// const goToNews = (e: Event, news: {}) => {}
</script>

<template>
	<MainHeader @open="open" />
	<HorizontalTabs />
	<Transition>
		<Broadcast :show="closeModal" @close="close" />
	</Transition>
	<ul v-if="tagesschau.news.length > 0" class="p-2 mt-4">
		<li class="px-3" v-for="n in tagesschau.news.slice(0, countToLoad)">
			<router-link :to="`/news/${n.sophoraId}`">
				<Transition>
					<MainCard v-if="n" v-bind="n" />
				</Transition>
			</router-link>
		</li>
	</ul>
	<Spinner v-else />
</template>

<style scoped lang="scss">
ul {
	list-style: none;
	display: flex;
	padding: 0;
	width: 100%;
	flex-wrap: wrap;
	column-gap: 10px;
	flex-direction: row;
	row-gap: 10px;
	justify-content: center;
	padding: 0 4px;

	li {
		width: 30%;
		flex: 30%;
		animation: nicely-show-up 3s;
		@media only screen and (max-width: 900px) {
			width: 40%;
		}
		@media only screen and (max-width: 600px) {
			width: 80%;
		}
	}
}
</style>
<style>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from {
	opacity: 0.3;
}
.v-leave-to {
	opacity: 1;
}
</style>
