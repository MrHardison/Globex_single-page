const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Galeo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width' },
      { hid: 'description', name: 'description', content: 'Galeo is a new paradigm digital bank created to provide a free banking around the world and democratise access to financial products, such as credit cards, lending, savings, insurance and other.' },
      { hid: 'keywords' , name:'keywords', content: 'Galeo, Galeo Bank, digital bank, online bank, FinTech, bank challenger, bank, bank account, debit card, credit card, international money transfer, online payments, current account, loans, savings, insurance' },
      { hid: 'copyright', name: 'copyright', content: 'Galeo Limited' } 
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/fonts/fonts.sass'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/swiper', ssr: false },
    { src: '~/plugins/click-outside', ssr: false },
    { src: '~/plugins/axios', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    // Global sass
    [
      'nuxt-sass-resources-loader',
      ['@/assets/sass/base.sass', '@/assets/sass/style.sass']
    ]
  ],

  /*
  ** Google analytics
  */
  'google-analytics': {
    id: 'UA-108895630-7'
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
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
          exclude: /(node_modules)/
        })
      }
    }
  },

  serverMiddleware: ['redirect-ssl']
}
