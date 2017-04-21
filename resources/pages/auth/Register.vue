<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="#"><b>Лига</b>Инвесторов</a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Стать участником</p>

        <form-errors :value="msg"></form-errors>

        <div>
          <div class="form-group has-feedback">
            <input name="name" type="text" class="form-control" v-model="username" placeholder="Ваше имя">
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input name="email" type="email" class="form-control" v-model="email" placeholder="Email">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" v-model="password" placeholder="Пароль">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control"
                   @keyup.enter="submit"
                   v-model="password_confirmation" placeholder="Повторите пароль">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <!-- /.col -->
            <div class="col-xs-6">
              <button type="submit" class="btn btn-primary btn-block btn-flat"
                      @click="submit"
                      :disabled="validCredentials || sending">Регистрация
              </button>
            </div>
            <!-- /.col -->
          </div>
        </div>
        <!-- /.social-auth-links -->

        <!--<router-link to="/auth/forgot" tag="a">-->
        <!--Воостановить пароль-->
        <!--</router-link>-->

        <div class="text-center login-button">
          Уже есть аккаунт? -
          <router-link to="/auth/login" tag="a">
            Вход
          </router-link>
        </div>

      </div>
      <!-- /.login-box-body -->
    </div>
    <!-- /.login-box -->
  </div>
</template>
<style>
  .login-button {
    margin-top: 15px;
  }
</style>
<script>
  export default{
    metaInfo: {
      title: 'Регистрация'
    },
    computed: {
      query () {
        return this.$route.query
      },
      state () {
        return this.$store.state
      },
      validCredentials () {
        return !(this.username && this.email && this.password && this.password_confirmation)
      },
      credentials () {
        return {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }
      },
      email: {
        get () {
          return this.$store.state.email
        },
        set (val) {
          this.$store.commit('setEmail', val)
        }
      },
      redirect () {
        return _.get(this.query, 'redirect', null)
      }
    },
    data () {
      return {
        msg: null,
        sending: false,
        username: null,
        password: null,
        password_confirmation: null,
        phone: null,
        site: null
      }
    },
    methods: {
      submit () {
        this.sending = true
        this.msg = null
        this.axios.post('auth/register', this.credentials).then(
                res => {
                  this.$store.dispatch('setToken', _.get(res, 'data.token'), true)
                  this.$store.dispatch('getAllState').then(
                          () => {
                            this.registerSuccess(res)
                          },
                          () => {
                            this.registerSuccess(res)
                          }
                  )
                }
        ).catch((error) => {
          this.sending = false
          this.msg = _.get(error, 'response.data.message', 'Возникла ошибка, попробуйте еще раз')
        })
      },
      registerSuccess (res) {
        console.log(res)
        this.sending = false
        this.$router.push({name: 'index'})
      }
    }
  }
</script>
