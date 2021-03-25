export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'all-news',
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dayjs',
       'nuxt-i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
      // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'ar',
        iso: 'ar',
        file: 'ar.js',
        name: 'العربية'
      },
    ],
    vueI18n: {
      fallbackLocale: 'ar'
    },
    defaultLocale: 'ar',
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'lang/'
  },
  dayjs: {
    locales: ['ar'],
    defaultLocale: 'ar',
    plugins: ['relativeTime', 'advancedFormat'],
},
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
