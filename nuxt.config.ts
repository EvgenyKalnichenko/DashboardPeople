import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
              '@import "@/assets/css/base/_mixins.scss"; @import "@/assets/css/base/_variables.scss";',
        },
      },
    },
  },
  css: ['@/assets/css/main.scss'],
  publicRuntimeConfig: {
    VUE_APP_API_KEY:  process.env.VUE_APP_API_KEY,
    VUE_APP_AUTH_DOMAIN: process.env.VUE_APP_AUTH_DOMAIN,
    VUE_APP_PROJECT_ID: process.env.VUE_APP_PROJECT_ID,
    VUE_APP_BACKEND_API: process.env.VUE_APP_BACKEND_API,
  },
  privateRuntimeConfig: {
    VUE_APP_API_KEY: process.env.VUE_APP_API_KEY,
  },
});
