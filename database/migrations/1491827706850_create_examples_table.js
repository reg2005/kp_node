'use strict'

const Schema = use('Schema')

class ExamplesTableSchema extends Schema {

  up () {
    this.create('examples', (table) => {
      table.increments()
      table.integer('post_id').notNullable()
      table.string('text').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('examples')
  }

}

module.exports = ExamplesTableSchema
