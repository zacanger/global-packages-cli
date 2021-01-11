import gp from 'global-packages'

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
  -t | --text
  Get the list as plain text (newline-separated)
Example:
  global-packages -j
`

type Package = {
  name: string
  linked: boolean
  path: string
}

const mapNames = (xs: Array<Package>) => xs.map((x) => x.name)

const main = (opts: string) => {
  if (opts) {
    // eslint-disable-next-line unicorn/prefer-ternary
    if (opts === '-j' || opts.includes('json')) {
      return gp().then((a: Array<Package>) =>
        log(JSON.stringify(mapNames(a), null, 2))
      )
    }

    // eslint-disable-next-line unicorn/prefer-ternary
    if (opts === '-t' || opts.includes('text')) {
      return gp().then((a: Array<Package>) => log(mapNames(a).join('\n')))
    }

    return log(help)
  }

  return gp().then((a: Array<Package>) => log(mapNames(a)))
}

main(arg)
