<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { MainCard, MainHeader, HorizontalTabs, Spinner } from '~/components'
import { useTagesschau } from '../stores/useNewpapers/useTagesschau'
import { useRoute } from 'vue-router'

const tages: any = useTagesschau()
const route = useRoute()

const getTaggedNews = () => {
	const _t: any = tages.news.filter((t: any) =>
		t.tags.find(
			(tt: any) =>
				tt.tag.toLowerCase() === route.params.tab.toString().toLowerCase()
		)
	)
	return _t
}

watch(route, () => {
	getTaggedNews()
})

onMounted(() => {
	getTaggedNews()
})
</script>

<template>
	<MainHeader />
	<HorizontalTabs />
	<ul v-if="getTaggedNews().length > 0" class="p-2 mt-4">
		<li class="px-3" v-for="n in getTaggedNews()">
			<Transition>
				<MainCard v-if="n" v-bind="n" />
			</Transition>
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
