import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		ssr: true,
		theme: {
			defaultTheme: "dark",
			themes: {
				dark: {
					dark: true,
					colors: {
						primary: "#DC2626",
						secondary: "#1E3A8A",
					},
				},
			},
		},
		icons: {
			defaultSet: "mdi",
		},
	});

	nuxtApp.vueApp.use(vuetify);
});
