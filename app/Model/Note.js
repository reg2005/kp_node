'use strict'

const Lucid = use('Lucid')

class Note extends Lucid {
  example () {
    return this.belongsToMany('App/Model/Example').withTimestamps()
  }
}

module.exports = Note
