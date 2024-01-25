<template>
	<aside class="bg-blue-grey-darken-4 elevation-12">
		<div>
			<v-avatar class="ml-n6 mt-12 mb-6 elevation-8" :size="200" image="https://avatars.githubusercontent.com/u/42472908"></v-avatar>
			<section class="mb-12">
				<h4 class="text-h3 mt-3 mb-1" style="font-weight: 700 !important">Aidan</h4>
				<h4 class="text-h3" style="font-weight: 700 !important">Liddy</h4>
			</section>

			<section class="mb-6">
				<p class="d-flex mb-3"><v-icon class="mr-2">mdi-map-marker</v-icon>Pittsburgh, PA</p>
				<div class="d-flex mb-3">
					<v-icon class="mr-2">mdi-school</v-icon>
					<p>Computer Science,<br />University of Pittsburgh<br />School of Computing and Information</p>
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

				<p class="d-flex mt-12">
					<a href="/resume.pdf" target="_blank"><v-icon class="mr-2">mdi-download</v-icon>Download as PDF</a>
				</p>
			</section>

			<!-- <section>
				<p>Experience</p>
				<p>Education</p>
				<p>Volunteering</p>
				<p>Skills</p>
			</section> -->
		</div>
	</aside>
</template>

<style>
	@media screen and (min-width: 1100px) {
		aside {
			max-width: 525px;
			width: 100%;
			background: #404040;
			float: left;
		}

		aside > div {
			max-width: 350px;
			margin-left: auto;
			padding: unset !important;
		}
	}

	aside {
		height: 100vh;
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
