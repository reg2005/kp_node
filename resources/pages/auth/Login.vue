<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="#"><b>Круто</b>Придумал</a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Вход в личный кабинет</p>

        <form-errors :value="msg"></form-errors>

        <div>
          <div class="form-group has-feedback">
            <input
                    name="email"
                    @keyup.enter="submit"
                    type="email" class="form-control" v-model="email" placeholder="Email">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input
                    name="password"
                    @keyup.enter="submit"
                    type="password" class="form-control" v-model="password" placeholder="Пароль">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox">
                <el-checkbox class="remember-check" v-model="remember">Запомнить меня</el-checkbox>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat"
                      @click="submit"
                      :disabled="sending">Войти
              </button>
            </div>
            <!-- /.col -->
          </div>
        </div>
        <!-- /.social-auth-links -->

        <!--<router-link to="/auth/forgot" tag="a">-->
        <!--Воостановить пароль-->
        <!--</router-link>-->

        <div class="text-center register-button">
          Нет аккаунта? -
          <router-link to="/auth/register" tag="a">
            Регистрация
          </router-link>
        </div>

      </div>
      <!-- /.login-box-body -->
    </div>
    <!-- /.login-box -->
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  .remember-check {
    padding: 0;
  }

  .register-button {
    margin-top: 15px;
  }
</style>
<script>
  export default{
    metaInfo: {
      title: 'Вход'
    },
    data () {
      return {
        password: null,
        remember: false,
        msg: null,
        sending: false
      }
    },
    computed: {
      credentials () {
        return {email: this.email, password: this.password}
      },
      user () {
        return this.$store.state.user
      },
      token () {
        return this.$store.state.token
      },
      email: {
        get () {
          return this.$store.state.email
        },
        set (val) {
          this.$store.commit('setEmail', val)
        }
      }
    },
    mounted () {

    },
    methods: {
      submit () {
        this.sending = true
        this.msg = null

        this.axios.post('auth/login', this.credentials).then(
                res => {
                  this.$store.dispatch('getAllState').then(
                          () => {
                            this.loginSuccess(res)
                          },
                          () => {
                            this.loginSuccess(res)
                          }
                  )
                }
        ).catch((error) => {
          this.sending = false
          this.msg = _.get(error, 'response.data.message', 'Возникла ошибка, попробуйте еще раз')
        })
      },
      loginSuccess (res) {
        this.sending = false
        this.$router.push('/')
      }
    }
  }
</script>
