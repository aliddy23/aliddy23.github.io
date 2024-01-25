<template>
	<v-app>
		<v-layout>
			<v-main>
				<Sidebar />

				<main>
					<v-container class="px-10 py-12">
						<Experience />
						<Education />
						<Volunteering />
						<Achievements />
						<Skills />
					</v-container>
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
	* {
		font-family: "Playfair Display" !important;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
		color: white !important;
		transition: 0.5s;
	}

	a:hover * {
		color: white !important;
		transition: 0.5s;
	}

	html,
	body,
	.v-application {
		background: #010101 !important;
	}

	@media screen and (min-width: 768px) {
		main {
			height: 100vh;
			overflow-y: scroll;
			overflow-x: hidden;
		}
	}

	ul {
		list-style-type: square;
	}

	.charms {
		white-space: nowrap;
		color: #bdbdbd;
	}

	.charms > p {
		margin-top: 4px;
	}

	@media screen and (min-width: 550px) {
		.charms:not(.achievements):not(.education) {
			display: flex;
		}
	}

	@media screen and (min-width: 1300px) {
		.charms.achievements,
		.charms.education {
			display: flex;
		}
	}

	.v-divider {
		opacity: 60% !important;
		border-width: 3px 0 0 0 !important;
	}
</style>
