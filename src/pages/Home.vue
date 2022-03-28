<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import Card1 from '../components/cards/Card1.vue'
import { useTagesschau } from '../stores/useNewpapers/useTagesschau'

const tages: any = useTagesschau()
onMounted(() => {
	tages.getData()
})

onUpdated(() => {
	console.log(tages.news)
})
</script>

<template>
	<ul>
		<li v-for="n in tages.news">
			<Card1 v-bind="n" />
		</li>
	</ul>
	<img alt="Vue logo" class="h-5 w-5" src="../assets/s.png" />
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style lang="scss">
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
}
</style>
