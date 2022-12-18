/**
 * loaders to process xml template to config.xml
 */

console.log('renaming apk file')
const { readFileSync } = require('fs')
const { resolve } = require('path')
const { cp, echo } = require('shelljs')
const env = resolve(__dirname, '../.env')

const str = readFileSync(
  env
).toString()
const conf = str
  .trim()
  .split('\n')
  .reduce((p, k) => {
    const [key, prop] = k.split('=')
    p[key] = prop
    return p
  }, {})

const from = resolve(
  __dirname,
  '../platforms/android/app/build/outputs/apk/debug/app-debug.apk'
)
const id = conf.appId
const to = resolve(
  __dirname,
  `../${conf.appId}-${conf.appVersion}.apk`
)
cp(from, to)
echo('done')
