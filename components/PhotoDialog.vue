<template>
	<main class="container">
		<section class="photo">
			<v-img class="rounded-lg elevation-12" :alt="photo.title" :src="`/photos/${photo.src}.jpg`" :lazy-src="`/photo_preview/${photo.src}.webp`">
				<template v-slot:placeholder>
					<div class="d-flex align-center justify-center fill-height">
						<v-progress-circular color="grey-lighten-4" :size="50" indeterminate></v-progress-circular>
					</div>
				</template>
			</v-img>
		</section>

		<section class="info">
			<v-card>
				<v-card-title class="text-h5 font-weight-bold pb-1">{{ photo.title }}</v-card-title>

				<v-card-text style="color: #9e9e9e">
					<p>{{ photo.date }}</p>
					<p>Shot by {{ photo.author }}</p>
				</v-card-text>
			</v-card>

			<v-card>
				<v-card-title class="text-h6 pb-1 font-weight-medium">{{ photo.location }}</v-card-title>
				<v-card-text>
					<p style="color: #9e9e9e">{{ photo.city }}</p>
				</v-card-text>
				<div class="mapouter">
					<div class="gmap_canvas">
						<iframe
							width="100%"
							height="250px"
							style="margin-bottom: -6px; outline: none !important"
							:src="`https://maps.google.com/maps?q=${photo.map}&z=13&output=embed`"
							frameborder="0"
						></iframe>
					</div>
				</div>
			</v-card>

			<v-card>
				<v-card-text>
					<table>
						<tr v-if="photo.camera">
							<td>Camera</td>
							<td>{{ photo.camera }}</td>
						</tr>

						<tr v-if="photo.lens">
							<td>Lens</td>
							<td>{{ photo.lens }}</td>
						</tr>

						<tr v-if="photo.focalLength">
							<td>Focal Length</td>
							<td>{{ photo.focalLength }}</td>
						</tr>

						<tr v-if="photo.speed">
							<td>Speed</td>
							<td>{{ photo.speed }} sec</td>
						</tr>

						<tr v-if="photo.aperture">
							<td>Aperture</td>
							<td>f/{{ photo.aperture }}</td>
						</tr>

						<tr v-if="photo.iso">
							<td>ISO</td>
							<td>{{ photo.iso }}</td>
						</tr>

						<tr v-if="photo.resolution">
							<td>Resolution</td>
							<td>{{ photo.resolution }}</td>
						</tr>

						<tr v-if="photo.fileType || photo.fileSize">
							<td>File</td>
							<td>{{ photo.fileType }} {{ photo.fileSize }}</td>
						</tr>
					</table>
				</v-card-text>
			</v-card>

			<v-card @click="download()">
				<v-card-text>
					<h6 class="text-h6 text-center pa-2"><v-icon class="mr-2">mdi-arrow-down</v-icon>Download</h6>
				</v-card-text>
			</v-card>
		</section>

		<v-btn icon="mdi-close" style="position: absolute; top: 16px; left: 16px" @click="emit('close')" top right variant="text"></v-btn>
	</main>
</template>

<script setup>
	const props = defineProps(["photo"]);
	const emit = defineEmits(["close"]);
</script>

<style scoped>
	.container {
		display: flex;
		padding: 16px !important;
		align-items: center;
	}

	.photo {
		width: 100%;
		padding-right: 16px;
	}

	.info {
		max-width: 325px;
		width: 100%;
	}

	.v-card:not(:last-of-type) {
		margin-bottom: 16px;
	}

	tr td:first-of-type {
		width: 80px;
		color: #9e9e9e;
		white-space: nowrap;
		padding-right: 8px;
	}
</style>
