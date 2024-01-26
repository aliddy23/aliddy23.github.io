<template>
	<aside class="bg-blue-grey-darken-4 elevation-12">
		<div>
			<v-avatar class="ml-n6 mb-6 elevation-8" :size="200" image="https://avatars.githubusercontent.com/u/42472908"></v-avatar>
			<section class="mb-12">
				<h4 class="text-h3 mt-3 mb-1" style="font-weight: 700 !important">Aidan</h4>
				<h4 class="text-h3" style="font-weight: 700 !important">Liddy</h4>
			</section>

			<section class="mb-6">
				<p class="d-flex mb-3">
					<a href="https://www.google.com/maps/place/Pittsburgh,+PA" target="_blank"><v-icon class="mr-2">mdi-map-marker</v-icon>Pittsburgh, PA</a>
				</p>
				<div class="mb-3">
					<a class="d-flex" href="https://www.sci.pitt.edu/academics/undergraduate-majors/computer-science" target="_blank">
						<v-icon class="mr-2">mdi-school</v-icon>
						<p>Computer Science,<br />University of Pittsburgh</p>
					</a>
				</div>
				<p class="d-flex mb-3">
					<a href="mailto:aidan@aidanliddy.com"><v-icon class="mr-2">mdi-email</v-icon>aidan@aidanliddy.com</a>
				</p>
				<p class="d-flex mb-3">
					<a href="https://github.com/aliddy23" target="_blank"><v-icon class="mr-2">mdi-github</v-icon>aliddy23</a>
				</p>
				<p class="d-flex mb-3">
					<a href="https://www.linkedin.com/in/aidanliddy" target="_blank"><v-icon class="mr-2">mdi-linkedin</v-icon>in/aidanliddy</a>
				</p>
				<p class="d-flex mb-3">
					<a href="https://www.instagram.com/liddy.aidan" target="_blank"><v-icon class="mr-2">mdi-instagram</v-icon>liddy.aidan</a>
				</p>

				<p class="d-flex mt-12 pb-12">
					<a href="/resume.pdf" target="_blank"><v-icon class="mr-2">mdi-arrow-down</v-icon>Download as PDF</a>
				</p>
			</section>
		</div>
	</aside>
</template>

<style>
	@media screen and (min-width: 950px) and (max-width: 1300px) {
		aside {
			max-width: 400px;
			width: 100%;
			background: #404040;
			float: left;
			overflow-y: scroll;
			height: 100vh;
		}

		aside > div {
			margin-left: 56px;
			padding: unset !important;
		}

		.v-avatar {
			margin-top: 100px;
		}
	}

	@media screen and (min-width: 1300px) {
		aside {
			max-width: 525px;
			width: 100%;
			background: #404040;
			float: left;
			overflow-x: hidden;
			overflow-y: scroll;
			height: 100vh;
		}

		aside > div {
			max-width: 350px;
			margin-left: auto;
			padding: unset !important;
		}

		.v-avatar {
			margin-top: 100px;
		}
	}

	@media screen and (max-width: 950px) {
		aside > div {
			margin-left: 56px;
			padding: unset !important;
		}

		.v-avatar {
			margin-top: 36px;
		}
	}

	aside {
		min-height: 100vh;
	}

	aside * {
		color: #b0bec5;
	}

	aside h4 {
		color: white;
	}

	aside > div {
		padding: 0px 12px 0px 15dvw;
	}
</style>
