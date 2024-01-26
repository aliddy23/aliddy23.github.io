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
