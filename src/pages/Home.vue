<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { MainCard, MainHeader, HorizontalTabs } from '~/components'
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
	<HorizontalTabs/>
	<ul class="p-2  mt-4" >
		<li class="px-3" v-for="n in tages.news">
			<MainCard v-bind="n" />
		</li>
		<!-- <li v-for="n in tages.news"> -->
		<!-- </li> -->
	</ul>
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

	li {
		width: 30%;
		@media only screen and (max-width: 900px){
			width: 40%;
		}
			@media only screen and (max-width: 600px){
			width: 80%;
		}
	}
}
</style>
