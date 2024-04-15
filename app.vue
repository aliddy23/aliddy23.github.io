<template>
	<v-app>
		<v-layout>
			<v-main style="overflow: hidden">
				<Sidebar />

				<main>
					<section class="main">
						<Gallery />
						<Experience />
						<Education />
						<Projects />
						<Skills />
						<Achievements />
						<Volunteering />
						<Extracurriculars />
						<Leadership />
					</section>

					<footer style="background: #0c0c0c; color: #a3a3a3" class="pa-12 text-center font-italic">
						<p>&copy; {{ new Date().getFullYear() }} Aidan Liddy.</p>
					</footer>
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
					"Aidan Liddy is a computer science major at the University of Pittsburgh and is open to opportunities in the tech industry in the greater Pittsburgh area.",
			},
			{
				name: "color-scheme",
				content: "dark",
			},
			{
				name: "author",
				content: "Aidan D. Liddy",
			},
		],
	});

	useSeoMeta({
		description:
			"Aidan Liddy is a computer science major at the University of Pittsburgh and is open to opportunities in the tech industry in the greater Pittsburgh area.",
		ogTitle: "Aidan Liddy",
		ogDescription:
			"Aidan Liddy is a computer science major at the University of Pittsburgh and is open to opportunities in the tech industry in the greater Pittsburgh area.",
		ogImage: "/favicon.ico",
		ogUrl: "https://www.aidanliddy.com",
		twitterTitle: "Aidan Liddy",
		twitterDescription:
			"Aidan Liddy is a computer science major at the University of Pittsburgh and is open to opportunities in the tech industry in the greater Pittsburgh area.",
		twitterCard: "summary",
	});
</script>

<style scoped>
	.main > *:not(:last-child) {
		margin-bottom: 32px;
	}
</style>
