'use strict'

const Lucid = use('Lucid')

class Post extends Lucid {
  static get rules () {
    return {
      title: 'required|min:2|max:255'
    }
  }
  static boot () {
    super.boot()


    this.addHook('beforeCreate', function * (next) {
      var elasticsearch = require('elasticsearch');
      var client = new elasticsearch.Client({
        host: 'localhost:9200',
        log: 'trace'
      });
      client.ping({
        // ping usually has a 3000ms timeout
        requestTimeout: 1000
      }, function (error) {
        if (error) {
          console.trace('elasticsearch cluster is down!');
        } else {
          console.log('All is well');
        }
      });
      yield next
    })
  }

  example () {
    return this.hasMany('App/Model/Example')
  }
}

module.exports = Post
