<template>
  <div>
    <loader/>
  </div>
</template>
<style lang="scss">

</style>
<script>
  export default {
    computed: {},
    data () {
      return {
        data: null
      }
    },
    mounted () {
      this.$store.dispatch('logout')

      this.$router.push('/auth/login')
    },
    methods: {}
  }
</script>
