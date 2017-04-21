<template>
  <div>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style>
  body, html {
    background: #d2d6de;
    padding: 0 !important;
    margin: 0 !important;
    height: 100% !important;
  }

  #app {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
</style>
