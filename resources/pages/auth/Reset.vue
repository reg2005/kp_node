<template>
  <div>
    <h2>Восставновление пароля | шаг 2</h2>
    <form-errors :value="msg"></form-errors>
    <div class="form-inline">
      <div class="form-group">
        <input
          :disabled="!token"
          type="password"
          class="form-control"
          placeholder="Новый пароль"
          v-model="credentials.password"
          @keyup.enter="submit()">
      </div>
      <button :disabled="sending" class="btn btn-primary" @click="submit()">ок</button>
    </div>
  </div>
</template>
<style>

</style>
<script>
  export default{
    data () {
      return {
        credentials: {
          password: null
        },
        msg: null,
        sending: false
      }
    },
    computed: {
      token () {
        return (this.$route.query.token || null)
      }
    },
    mounted () {

    },
    methods: {
      submit () {
        this.sending = true
        this.msg = null
        this.axios.post('auth/forgot/steps/two', {
          token: this.token,
          password: this.credentials.password,
          password_confirmation: this.credentials.password
        }).then(response => {
          this.sending = false
          if (response.data.token) {
            this.$store.commit('loaderEnable')
            this.$store.commit('setToken', response.data.token)
            this.$router.push('/')
          } else {
            this.$router.push('/auth/login')
          }
        }).catch(response => {
          this.sending = false
          this.msg = _.get(response.data, 'message', null)
        })
      }
    }
  }
</script>
