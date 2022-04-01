<script setup lang="ts">
import { onMounted, onUnmounted, Ref, ref } from 'vue'
import { MainCard, MainHeader, HorizontalTabs, Spinner } from '~/components'
import { useTagesschau } from '../stores/useNewpapers/useTagesschau'

const tages: any = useTagesschau()
const countToLoad: Ref<number> = ref(10)
const ulRef: any = ref(null)

onMounted(() => {
	tages.getData()
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
		countToLoad.value += 10
	}
}
</script>

<template>
	<MainHeader />
	<HorizontalTabs />
	<ul ref="ulRef" v-if="tages.news.length > 0" class="p-2 mt-4">
		<li class="px-3" v-for="n in tages.news.slice(0, countToLoad)">
			<MainCard v-if="n" v-bind="n" />
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
		@media only screen and (max-width: 900px) {
			width: 40%;
		}
		@media only screen and (max-width: 600px) {
			width: 80%;
		}
	}
}
</style>
