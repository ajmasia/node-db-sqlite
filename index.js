#!/usr/bin/env node

'use strict'

const minimist = require('minimist')
const { createDB } = require('./lib/db')
const argv = minimist(process.argv.slice(2))

async function main() {
  const db = await createDB()
  const command = argv._.shift()

  switch (command) {
    case 'user:create':
      break
    default:
      console.log(`comand not found: ${command}`)
  }
}

main().catch((err) => console.log(err))
