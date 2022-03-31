<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/solid'
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
			<ul :class="['tabs tabs-boxed w-full', styles.tabs]">
				<li :class="['tab', styles.home]">
					<a href="#">
						<HomeIcon />
					</a>
				</li>
				<li class="tab" v-for="t in tabs">
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
}
.home {
	a {
		svg {
			width: 30px;
		}
	}
}
</style>
