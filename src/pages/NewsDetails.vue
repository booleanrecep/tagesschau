<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useTagesschau } from '../stores/useNewpapers/useTagesschau'

const route = useRoute()
const tagesschau = useTagesschau()
const news: Ref<any> = ref({})

onMounted(() => {
	const _n = tagesschau.news.find(
		(n: any) => n.sophoraId === route.params.newsId
	)
	news.value = _n
})
</script>

<template>
	<div class="flex justify-center">
		<iframe :src="news.detailsweb" :title="news.title" width="80%" height="550">
		</iframe>
	</div>
</template>
<style></style>
