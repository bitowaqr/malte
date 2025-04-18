// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography';
import dotenv from 'dotenv';

dotenv.config();
console.log("process.env.API_KEY")
console.log(process.env.API_KEY)
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],
  css: [
    '@/assets/css/main.css', // Import the main CSS file
  ],
  tailwindcss: {
    configPath: 'tailwind.config.js',
    plugins: [tailwindTypography],
  },
  runtimeConfig: {
    datocmsApiToken: process.env.API_KEY,
    datoCmsToken: process.env.API_KEY,
    public: {
      datoCmsToken: process.env.DATOCMS_API_TOKEN
    }
  },
  ssr: true,
})