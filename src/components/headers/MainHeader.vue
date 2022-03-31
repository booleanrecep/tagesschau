<script setup lang="ts">
import {
	MenuIcon,
	AcademicCapIcon,
	ArrowCircleLeftIcon,
} from '@heroicons/vue/outline'
</script>
<template>
	<div :class="mainheader.container">
		<div :class="mainheader.items">
			<button>
				<AcademicCapIcon />
			</button>
		</div>
		<div :class="mainheader.items">
			<button>
				<ArrowCircleLeftIcon />
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
}
.items {
	button {
		width: 45px;
		height: 45px;
	}
}
</style>
