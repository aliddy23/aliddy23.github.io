<template>
	<section class="mb-12">
		<h4 class="text-h4 font-weight-bold">Achievements</h4>

		<v-divider class="my-4"></v-divider>

		<v-row>
			<v-col cols="12" md="6">
				<h5 class="text-h5">Eagle Scout</h5>
				<div class="charms achievements">
					<p class="mr-6 d-flex"><v-icon class="mr-2">mdi-account-group-outline</v-icon>Boy Scouts of America</p>
					<p class="d-flex"><v-icon class="mr-2">mdi-clock-outline</v-icon>August 2022</p>
				</div>
			</v-col>

			<v-col cols="12" md="6">
				<h5 class="text-h5">Black Belt, 2nd Degree</h5>
				<div class="charms achievements">
					<p class="mr-6 d-flex"><v-icon class="mr-2">mdi-account-group-outline</v-icon>Shaolin Studios</p>
					<p class="d-flex"><v-icon class="mr-2">mdi-clock-outline</v-icon>October 2023</p>
				</div>
			</v-col>
		</v-row>
	</section>
</template>

<style scoped>
	@media screen and (max-width: 900px) {
		div.text-grey-lighten-1 {
			display: block !important;
		}
	}
</style>
