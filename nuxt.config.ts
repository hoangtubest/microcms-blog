// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],
  microCMS: {
    serviceDomain: "ubyvb6y6u3",
    apiKey: "dXpmSjPDgVsTH5iN1iKBp5J3Jp0BeHuNyWyp",
    // serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    // apiKey: process.env.MICROCMS_API_KEY,
  },
  tailwindcss: {
    config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
});
