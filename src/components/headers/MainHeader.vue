<script setup lang="ts">
import { MenuIcon, PlayIcon } from '@heroicons/vue/outline'
import { useRoute } from 'vue-router'
import tagesschauLogo from '~/assets/tagesschauLogo.svg'
import tagesschauTitle from '~/assets/tagesschauTitle.svg'

const route = useRoute()
const emit = defineEmits(['open'])
</script>

<template>
	<div :class="mainheader.container">
		<div :class="['z-50', mainheader.items]">
			<router-link to="/" :class="mainheader.tageschau">
				<img :src="tagesschauLogo" />
				<img :src="tagesschauTitle" />
			</router-link>
		</div>
		<div v-if="!route.params.tab" :class="mainheader.items">
			<button :class="mainheader.sendung" @click="emit('open')">
				<span> Sendung verpasst? </span>
				<PlayIcon />
			</button>
		</div>
		<div :class="mainheader.items">
			<button>
				<MenuIcon />
			</button>
		</div>
	</div>
</template>
<style module="mainheader" lang="scss">
.container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 12px;
}
.items {
	button {
		width: 45px;
		height: 45px;
		margin: 12px 0;
	}
	.sendung {
		display: flex;
		width: fit-content;
		align-items: center;

		span {
			white-space: nowrap;
			margin-right: 6px;
		}
		svg {
			width: 40px;
			height: 40px;
		}
		@media only screen and (max-width: 600px) {
			flex-direction: column-reverse;
		}
	}
	.tageschau {
		display: flex;
		align-items: center;
		width: 150px;
		img:first-of-type {
			width: 75px !important;
		}
		img:last-of-type {
			width: 150px !important;
		}
		@media only screen and (max-width: 600px) {
			width: 100px;

			img:first-of-type {
				width: 50px !important;
			}
			img:last-of-type {
				display: none;
			}
		}
	}
}
</style>
