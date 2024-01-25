<template>
	<v-app>
		<v-layout>
			<v-main>
				<Sidebar />

				<main>
					<Experience />
					<Education />
					<Volunteering />
					<Achievements />
					<Skills />
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
			padding-right: 175px;
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

	.v-divider {
		opacity: 60% !important;
		border-width: 3px 0 0 0 !important;
	}
</style>
