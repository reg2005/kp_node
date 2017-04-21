'use strict'

class StateController {
  * allState (request, response) {
    const user = yield request.auth.getUser()

    response.send({
      user: user
    })
  }
}

module.exports = StateController
