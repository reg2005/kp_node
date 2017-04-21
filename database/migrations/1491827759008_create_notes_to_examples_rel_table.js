'use strict'

const Schema = use('Schema')

class NotesToExamplesTableSchema extends Schema {

  up () {
    this.create('example_note', (table) => {
      table.increments()
      table.integer('note_id').notNullable()
      table.integer('example_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('example_note')
  }

}

module.exports = NotesToExamplesTableSchema
