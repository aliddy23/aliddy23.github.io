<template>
	<div>
		<v-card class="elevation-12" @click="dialog = true">
			<NuxtImg :src="`/photo_preview/${photo.src}.webp`" :alt="photo.title" preload style="width: 100%; margin-bottom: -6px" />
		</v-card>

		<v-dialog fullscreen v-model="dialog" transition="slide-y-transition">
			<PhotoDialog :photo="photo" @close="dialog = false" />
		</v-dialog>
	</div>
</template>

<script setup>
	const props = defineProps(["photo"]);
	const emit = defineEmits(["click"]);

	let dialog = ref(false);
</script>
