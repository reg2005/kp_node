<template>
  <div>
    Hello
  </div>
</template>
<style>

</style>
<script>
  export default {
    computed: {
      token: {
        get () {
          this.$store.state.token
        },
        set (val) {
          this.$store.commit('setToken', val)
        }
      },
      tarif: {
        get () {
          this.$store.state.auth.tarif
        },
        set (val) {
          this.$store.commit('setTarif', val)
        }
      }
    },
    data () {
      return {
        data: null
      }
    },
    mounted () {
      var token = _.get(this.$route.query, 'token', null)
      if (token) {
        this.token = token
      }
      this.tarif = _.get(this.$route.query, 'tarif', 1)
      this.widget = _.get(this.$route.query, 'widget', null) || null
      var siteId = _.get(this.$route.query, 'site_id', null) || null

      if (siteId) {
        this.$store.commit('setSelectedSite', siteId);
      }
      this.$store.dispatch('getAllState', {loader: false}).then((data) => {
        if (this.widget) {
          this.$router.push({
            path: '/widget/edit/' + this.widget
          })
        }
      }, () => {
        this.$router.push('/auth/login')
      });
    },
    methods: {}
  }

</script>
