<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/solid'
import { useRouter, useRoute } from 'vue-router'
import { useTagesschau } from '~/stores/useNewpapers/useTagesschau'

const tagesschau = useTagesschau()
const router = useRouter()
const route = useRoute()
const handleTabRoute = (e: Event, tab: string) => {
	router.push('/tabs/' + tab)
}
const tabs: string[] = [
	'Ukraine',
	'Corona',
	'Inland',
	'Ausland',
	'Wirtschaft',
	'Faktenfinder',
	'Investigativ',
	'Wetter',
	'Videos & Audios',
]
</script>
<template>
	<div>
		<div>
			<ul :class="['tabs tabs-boxed w-full overflow-auto', styles.tabs]">
				<li @click="router.push('/')" :class="['tab', styles.home]">
					<HomeIcon />
				</li>
				<li
					v-for="t in tagesschau.tags"
					@click="handleTabRoute($event, t)"
					:class="[
						'tab text-xl focus-within:tab-active',
						styles.tab,
						route.params.tab === t ? 'tab-active' : '',
					]"
				>
					<a href="#"> {{ t }} </a>
				</li>
			</ul>
		</div>
	</div>
</template>
<style module="styles" lang="scss">
.tabs {
	flex-wrap: nowrap !important;
	white-space: nowrap;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none;
	-webkit-overflow-scrolling: touch;

	&::-webkit-scrollbar {
		display: none;
	}
}
.home {
	svg {
		width: 30px;
	}
}
.tab {
	padding: 0 12px !important;
}
</style>
