'use strict'

const Schema = use('Schema')

class CreatePostsTableTableSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('youtube')
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = CreatePostsTableTableSchema
