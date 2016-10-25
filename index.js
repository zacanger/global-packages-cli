#!/usr/bin/env node

const gp = require('global-packages')

gp().then((a) => console.log(JSON.stringify(a, null, 2)))
