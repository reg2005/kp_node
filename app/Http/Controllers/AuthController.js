'use strict'
const Validator = use('Validator')
const User = use('App/Model/User')

class AuthController {
  * login (request, response) {

    const email = request.input('email')
    const password = request.input('password')

    try {
      yield request.auth.attempt(email, password)
      response.ok()
    } catch (e) {
      response.unauthorized({error: e.message})
    }

    response.unauthorized('Invalid credentails')
  }

  * register (request, response) {
    const userData = request.all()
    const validation = yield Validator.validate(userData, User.rules)

    if (validation.fails()) {
      response.status(401).json({message:validation.messages()})
      return
    }

    const user = new User()
    user.username = request.input('username')
    user.email = request.input('email')
    user.password = request.input('password')

    yield user.save()

    yield request.auth.login(user)
    // const token = yield request.auth.generate(user)

    response.send({user: user})

  }
}

module.exports = AuthController
