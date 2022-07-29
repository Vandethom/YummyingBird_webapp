export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'adminbird',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/main.css',
    '~assets/css/classes.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/amplify.js', mode: 'client' },
    '~/plugins/auth.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': { target: 'https://nl968j615m.execute-api.eu-west-3.amazonaws.com/dev/recipe', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  //   // https://go.nuxtjs.dev/axios
  //   '@nuxtjs/axios',
  // ],

  // // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   proxy: true,
  // },
  // proxy: {
  //   '/api/': { target: 'https://yummying-api.herokuapp.com/', pathRewrite: {'^/api/': ''} }
  // },c    baseURL: `http://localhost:3001`,
  build: {},
}
