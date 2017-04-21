'use strict'

const Lucid = use('Lucid')
const Hash = use('Hash')

class User extends Lucid {

  static get rules () {
    return {
      username: 'required_if:password|min:2|max:255',
      email: 'required|email|unique:users',
      password: 'required|min:6|max:255',
      password_confirmation: 'required_if:password|same:password'
    }
  }

  static boot () {
    super.boot()

    /**
     * Hashing password before storing to the
     * database.
     */
    this.addHook('beforeCreate', function * (next) {
      this.password = yield Hash.make(this.password)
      yield next
    })
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

}

module.exports = User
