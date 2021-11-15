'use strict'

const path = require('path')
const { Database } = require('sqlite3').verbose()
const db = new Database(path.join(__dirname, '..', 'secret.db'))

async function createDB() {
  return new Promise((resolve, reject) => {
    resolve({
      client: db,
    })
  })
}

module.exports = {
  createDB,
}
