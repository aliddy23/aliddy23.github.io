<template>
	<v-app>
		<v-layout>
			<v-main>
				<Sidebar />

				<main>
					<Gallery />
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
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;800&display=swap",
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
				crossorigin: "anonymous",
			},
		],
		meta: [
			{
				name: "description",
				content:
					"Aidan Liddy is a computer science major at the University of Pittsburgh and is open to opportunities in the tech industry in and around Pittsburgh, PA.",
			},
		],
	});
</script>
