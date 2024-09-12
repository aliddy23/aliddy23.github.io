import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
 devtools: {
					enabled: true,

					timeline: {
									enabled: true,
					},
	},

 css: ["vuetify/styles", "~/assets/styles.css"],

 vite: {
					ssr: {
									noExternal: ["vuetify"],
					},
	},

 modules: [
					async (options, nuxt) => {
									// @ts-ignore
									nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()));
					},
					"nuxt-server-utils",
					"@nuxt/image",
					"nuxt-security",
	],

 ssr: true,
 components: ["~/components"],
 compatibilityDate: "2024-09-11",
});