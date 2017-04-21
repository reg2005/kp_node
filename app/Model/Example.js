'use strict'

const Lucid = use('Lucid')

class Example extends Lucid {
  static get rules () {
    return {
      text: 'required|min:10'
    }
  }
  post () {
      return this.belongsTo('App/Model/Post')
  }

  note () {
    return this.belongsToMany('App/Model/Note').withTimestamps()
  }

}

module.exports = Example
