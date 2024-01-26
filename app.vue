<template>
	<v-app>
		<v-layout>
			<v-main>
				<Sidebar />

				<main>
					<Experience />
					<Education />
					<Skills />
					<Achievements />
					<Volunteering />
				</main>
			</v-main>
		</v-layout>
	</v-app>
</template>

<script setup lang="ts">
	useHead({
		title: "Aidan Liddy",
		link: [
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap",
			},
		],
	});
</script>

<style>
	.text-h4 {
		color: #eceff1;
	}

	.text-h5,
	.text-h6 {
		color: #cfd8dc;
	}

	* {
		font-family: "Playfair Display" !important;
	}

	li {
		color: #cfd8dc;
	}

	a,
	a * {
		text-decoration: none;
		color: unset;
		transition: 0.4s;
	}

	a:hover,
	a:hover * {
		color: white !important;
	}

	html,
	body,
	.v-application {
		background: #080808 !important;
	}

	main {
		padding: 40px;
	}

	@media screen and (min-width: 1300px) {
		main {
			height: 100vh;
			overflow-y: scroll;
			overflow-x: hidden;
			padding-right: 225px;
		}
	}

	@media screen and (min-width: 950px) and (max-width: 1300px) {
		main {
			height: 100vh;
			overflow-y: scroll;
			overflow-x: hidden;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 950px) {
		main {
			overflow-y: scroll;
			overflow-x: hidden;
		}
	}

	ul {
		list-style-type: square;
	}

	.charms {
		margin-top: 2px;
		white-space: nowrap;
		color: #90a4ae;
	}

	.charms > p {
		margin-top: 4px;
	}

	@media screen and (min-width: 550px) {
		.charms:not(.achievements):not(.education) {
			display: flex;
		}
	}

	.v-divider {
		opacity: 100% !important;
		border-color: #455a64 !important;
		border-width: 3px 0 0 0 !important;
	}
</style>
