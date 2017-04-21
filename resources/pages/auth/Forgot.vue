<template>
  <div>
    <div v-if="sended">
      <h3>Запрос на восстановление пароля успешно создан!</h3>
      <p>На ваш email <b>{{email}}</b> выслано письмо с дальнейшими инструкциями</p>
      <a v-show="mailDomain" :href="'http://' + mailDomain">Перейти на {{mailDomain}}</a>
    </div>
    <div v-else>
      <h3>Восставновление пароля | шаг 1</h3>
      <form-errors :value="msg"></form-errors>
      <div class="form-group">
        <input
          name="email"
          type="email"
          class="form-control"
          placeholder="Введите email"
          v-model="email"
          @keyup.enter="submit()"
        >
      </div>
      <button :disabled="sending" class="btn btn-primary" @click="submit()">ок</button>
      |
      <div class="form-group">
        <router-link to="/auth/login" tag="a">
          Вход
        </router-link>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
  export default{
    data () {
      return {
        msg: null,
        sending: false,
        sended: false
      }
    },
    mounted () {
      if (this.$store.state.user) {
        this.$router.push(
          '/dashboard'
        )
      }
    },
    computed: {
      mailDomain () {
        if (!this.email) {
          return null
        }
        var split = this.email.split('@')
        if (split.length) {
          return split[split.length - 1]
        }
        return null
      },
      email: {
        get () {
          return this.$store.state.auth.email
        },
        set (val) {
          this.$store.commit('setAuthEmail', val)
        }
      }
    },
    methods: {
      submit () {
        this.sending = true
        this.msg = null
        this.axios.post('auth/forgot/steps/one', {email: this.email})
          .then(response => {
            // переадресуем на исходный адрес
            this.sending = false
            this.sended = true
          })
          .catch(response => {
            this.sending = false
            this.msg = _.get(response.data, 'msg', null)
          })
      }
    }
  }
</script>
