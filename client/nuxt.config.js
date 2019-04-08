import pkg from './package';

require('dotenv').config();

export default {
  mode: 'universal',

  server: {
    port: 8080,
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'tjhillard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/styles/index.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    'nuxt-fontawesome',
  ],

  proxy: {
    '/api': 'http://127.0.0.1:3001',
  },

  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: '/api',
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: 'auth/login',
  //           method: 'post',
  //           propertyName: 'token',
  //         },
  //         user: { url: 'auth/me', method: 'get', propertyName: '' },
  //         logout: false,
  //       },
  //     },
  //   },
  //   redirect: {
  //     login: '/login',
  //     logout: '/login',
  //     callback: '/',
  //     home: '/',
  //   },
  // },

  fontawesome: {
    component: 'fa',
    imports: [
      // import whole set
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
