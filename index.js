#!/usr/bin/env node

const gp = require('global-packages')
const arg = process.argv[2]
const { log } = console
const help = `
  global-packages-cli
  -------------------
  Get a list of all node modules installed globally.
  Usage:
    global-packages
  Options:
    -j | --json
    Get the list in JSON.
  Example:
    global-packages -j
`

const mapNames = (xs) => xs.map((x) => x.name)

const main = opts => {
  if (opts) {
    if (opts === '-j' || opts.includes('json')) {
      return gp().then((a) => log(JSON.stringify(mapNames(a), null, 2)))
    } else {
      return log(help)
    }
  }
  return gp().then((a) => log(mapNames(a)))
}

if (module.parent) {
  log('global-packages-cli should be installed globally')
} else {
  main(arg)
}
