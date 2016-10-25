#!/usr/bin/env node

const gp = require('global-packages')
const arg = process.argv[2]

const withJson = str => JSON.stringify(str, null, 2)

if (arg) {
  if (arg === '-j' || arg.includes('json')) {
    return gp().then((a) => console.log(withJson(a)))
  } else {
    return console.log('usage: global-packages [-j (for json)]')
  }
}

gp().then((a) => console.log(withJson(a).replace(/("|,|\[|\])/g, '')))
