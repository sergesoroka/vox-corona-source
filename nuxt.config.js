const axios = require('axios')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Vox | Coronavirus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        property: 'og:image',
        content: 'https://voxukraine.org/coronavirus/img/COVID-19.gif'
      },
      { prefix: 'og: http://ogp.me/ns#', property: 'og:type', content: 'blog' },
      {
        prefix: 'og: http://ogp.me/ns#',
        property: 'og:title',
        content: 'VoxUkraine'
      },
      {
        prefix: 'og: http://ogp.me/ns#',
        property: 'og:description',
        content: 'VoxUkraine — більше ніж найкраща аналітика про Україну'
      },
      {
        prefix: 'og: http://ogp.me/ns#',
        property: 'og:url',
        content: 'https://voxukraine.org/coronavirus'
      },
      {
        prefix: 'og: http://ogp.me/ns#',
        property: 'og:site_name',
        content: 'VoxUkraine'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'https://voxukraine.org/wp-content/uploads/2016/08/cropped-favicon-e1480670976718.png'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    [
      'storyblok-nuxt',
      {
        accessToken:
          process.env.NODE_ENV == 'production'
            ? 'PEm9WfOV0kl5bpIG3FLUnQtt'
            : 'gXLC4KzgA7nZrkD89pQkKAtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  router: {
    base: '/'
  },
  // generate: {
  //   routes: function() {
  //     return axios
  //       .get(
  //         'https://api.storyblok.com/v1/cdn/stories?version=published&token=PEm9WfOV0kl5bpIG3FLUnQtt&cv=' +
  //           Math.floor(Date.now() / 1e3)
  //       )
  //       .then(res => {
  //         const blogPosts = res.data.stories.map(bp => bp.full_slug)
  //         return ['/', '/digests', '/antifake', '/monitor']
  //       })
  //   }
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
