import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  meta: {
    title: 'Vite Nuxt 3',
    link: [
      {
        rel: 'icon', type: 'image/svg', href: '/faviro.svg',
      },
    ],
  },
  buildModules: [
    // pinia plugin - https://pinia.esm.dev
    "@pinia/nuxt",
  ],
  build: {
    transpile: ['@heroicons/vue'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: [
        '@headlessui/vue', '@heroicons/vue/solid', '@heroicons/vue/outline', 'vue', 'pinia'
      ]
    }
  }
});
