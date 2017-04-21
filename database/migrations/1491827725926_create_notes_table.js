'use strict'

const Schema = use('Schema')

class NotesTableSchema extends Schema {

  up () {
    this.create('notes', (table) => {
      table.increments()
      table.string('key').notNullable()
      table.text('value').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('notes')
  }

}

module.exports = NotesTableSchema
