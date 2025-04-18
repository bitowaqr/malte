// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv';

dotenv.config();
console.log("process.env.API_KEY")
console.log(process.env.API_KEY)
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    // '@nuxt/icon', // Keeping this commented unless icons are needed immediately
  ],
  css: [
    '@/assets/css/main.css', // Import the main CSS file
  ],
  runtimeConfig: {
    datocmsApiToken: process.env.API_KEY,
    datoCmsToken: process.env.API_KEY,
    public: {
      datoCmsToken: process.env.DATOCMS_API_TOKEN
    }
  },
  ssr: true,
})