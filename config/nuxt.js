'use strict'

const resolve = require('path').resolve

module.exports = {
  /*
   ** Headers of the page
   */
  build: {
    vendor: ['axios']
  },
  plugins: [
    '~plugins/all-plugins',
    '~plugins/axios'
  ],
  head: {
    title: 'Круто придумал',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/css/AdminLTE.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/css/skins/skin-blue.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/element-ui/1.2.7/theme-default/index.css'
      },
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js'},
      {src: '//cdn.ckeditor.com/4.6.2/full/ckeditor.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.3.11/js/app.min.js'}
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css'],
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#744d82'},
  /*
   ** Point to resources
   */
  srcDir: resolve(__dirname, '..', 'resources')
}
