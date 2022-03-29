<script setup lang="ts">
import { MenuIcon } from '@heroicons/vue/outline'
</script>
<template>
	<div :class="mainheader.container">
		<div :class="mainheader.items" v-for="i in [0, 0, 0]">
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
}
.items {
	button {
		width: 3.6rem;
		height: 3.6rem;
	}
}
</style>
