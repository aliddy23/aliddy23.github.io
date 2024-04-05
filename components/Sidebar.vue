<template>
	<aside class="bg-blue-grey-darken-4 elevation-12">
		<div>
			<v-avatar class="ml-n6 mb-6 elevation-8" :size="200">
				<NuxtImg src="/image.webp" alt="Headshot of Aidan Liddy" width="200" height="200" />
			</v-avatar>
			<section class="mb-12">
				<h4 class="text-h3 mt-3 mb-1">Aidan</h4>
				<h4 class="text-h3">Liddy</h4>
			</section>

			<section class="mb-6">
				<p class="mb-3">
					<a class="d-flex" href="https://www.google.com/maps/place/Pittsburgh,+PA" target="_blank"
						><v-icon class="mr-2">mdi-map-marker</v-icon>Pittsburgh, PA</a
					>
				</p>
				<div class="mb-3">
					<a class="d-flex" href="https://www.sci.pitt.edu" target="_blank">
						<v-icon class="mr-2">mdi-school</v-icon>
						<p>BS, Computer Science,<br />Mnr, Information Science,<br />University of Pittsburgh</p>
					</a>
				</div>
				<p class="mb-3">
					<a class="d-flex" href="mailto:aidan@aidanliddy.com"><v-icon class="mr-2">mdi-email</v-icon>aidan@aidanliddy.com</a>
				</p>
				<p class="mb-3">
					<a class="d-flex" href="tel:+14124270411"><v-icon class="mr-2">mdi-phone</v-icon>(412) 427-0411</a>
				</p>
				<p class="mb-3">
					<a class="d-flex" href="https://github.com/aliddy23" target="_blank"><v-icon class="mr-2">mdi-github</v-icon>aliddy23</a>
				</p>
				<p class="mb-3">
					<a class="d-flex" href="https://www.linkedin.com/in/aidanliddy" target="_blank"><v-icon class="mr-2">mdi-linkedin</v-icon>aidanliddy</a>
				</p>
				<p class="mb-3">
					<a class="d-flex" href="https://www.instagram.com/liddy.aidan" target="_blank"><v-icon class="mr-2">mdi-instagram</v-icon>liddy.aidan</a>
				</p>

				<p class="mt-12 pb-10">
					<a class="d-flex" href="/resume.pdf" target="_blank"><v-icon class="mr-2">mdi-arrow-top-right</v-icon>View Résumé</a>
				</p>
			</section>
		</div>
	</aside>
</template>
