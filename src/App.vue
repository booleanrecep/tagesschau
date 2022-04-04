<script setup lang="ts">
import { onMounted } from 'vue'
import { useTagesschau } from '~/stores/useNewpapers/useTagesschau'
const tagesschau: any = useTagesschau()

onMounted(() => {
	tagesschau.getData()
})
</script>
<template>
	<router-view></router-view>
</template>

<style></style>
