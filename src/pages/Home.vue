<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { MainCard, MainHeader } from '~/components'
import { useTagesschau } from '../stores/useNewpapers/useTagesschau'

const tages: any = useTagesschau()
onMounted(() => {
	tages.getData()
})

onUpdated(() => {
	console.log(tages.news[0])
})
</script>

<template>
	<MainHeader />
	<ul>
		<li>
			<MainCard v-bind="tages.news[0]" />
		</li>
		<!-- <li v-for="n in tages.news"> -->
		<!-- </li> -->
	</ul>
</template>

<style scoped lang="scss">
ul {
	list-style: none;
	margin: 0;
	display: flex;
	padding: 0;
	width: 100%;
	flex-wrap: wrap;
	column-gap: 10px;
	flex-direction: row;
	row-gap: 10px;
	justify-content: center;

	li {
		width: 100%;
	}
}
</style>
