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
    '@nuxtjs/pwa',
  ],
  pwa: {
    icon: false,
    manifest: {
      name: "",
      short_name: "",
      description: "",
      background_color: "#ffffff",
      theme_color: "#22C55E",
      lang: "zh",
      useWebmanifestExtension: false,
      start_url: "/"
    },
    meta: {
      viewport: "width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no",
    },
    render: {
      http2: {
        push: true
      },
      static: {
        maxAge: "1y",
        setHeaders(res, path) {
          if (path.includes("sw.js")) {
            res.setHeader("Cache-Control", `public, max-age=${15 * 60}`);
          }
        }
      }
    },
    workbox: {
      workboxVersion: 3,
      enabled: true,
      workboxURL: 'https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js',
      importScripts: ['assets/','static']
    }
  },
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
