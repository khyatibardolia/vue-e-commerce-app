export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'js_challenge_khyati-bardolia',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '@/assets/styles/main.scss' ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ '~/plugins/axios-accessor' ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [ 'nuxt-svg-loader', '@nuxtjs/axios' ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Axios Configuration: https://axios.nuxtjs.org/options/
  axios: {
    proxy: true,
    baseURL: 'https://api.musement.com/api/v3',
    headers: {
      common: {
        'accept-language': 'it',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'x-musement-version': '3.4.0',
      },
    },
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: 'https://api.musement.com/api/v3',
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: 'https://api.musement.com/api/v3',
    },
  },
}
