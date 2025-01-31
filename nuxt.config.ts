// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "nuxt-time",
    // "@nuxthq/studio",
  ],
  devtools: { enabled: true },
  ssr: false,

  compatibilityDate: "2025-01-30",
  future: {
    compatibilityVersion: 4,
  },

  // runtimeConfig: {
  //   // The private keys which are only available server-side
  //   apiSecret: "123",
  //   // Keys within public are also exposed client-side
  //   public: {
  //     apiBase: "/api",
  //   },
  // },
  content: {
    preview: {
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: 'pyritecreative-website2025',
        owner: 'pyritecreative',
        url: 'https://github.com/pyritecreative/pyritecreative-website2025'
      }
    },
  },
  // https://nuxt.com/docs/getting-started/styling
  // app: {
  //   head: {
  //     link: [
  //       {
  //         rel: "stylesheet",
  //         href: "https://fonts.googleapis.com/css?family=Open+Sans",
  //       },
  //       {
  //         rel: "stylesheet",
  //         href: "https://fonts.googleapis.com/css?family=Hind",
  //       },
  //       {
  //         rel: "stylesheet",
  //         href: "https://fonts.googleapis.com/css?family=Montserrat",
  //       },
  //     ],
  //   },
  // },

});