export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'كل الأخبار - اخر الأخبار الموريتانية',
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl'
    },
    meta: [
       { charset: 'utf-8' },
      { name: 'theme-color', content: '#27ae60' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'كل الأخبار' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://d.top4top.io/p_1911e7ol70.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://d.top4top.io/p_1911e7ol70.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'دليل مبرمج'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://d.top4top.io/p_1911e7ol70.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
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
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics'

  ],
  vuetify: {
    /* module options */
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dayjs',
       'nuxt-i18n',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID || 'UA-266889953-1',
  },
  pwa: {
    manifest: {
      name: 'كل الأخبار'
    },
    meta: {
      name: 'كل الأخبار',
      description: 'أخر الأخبار الموريتانية، ومن اوثق المصادر في البلد',
      theme_color: '#34495e',
      lang: 'ar',
      nativeUI: true,
    }
  },
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
