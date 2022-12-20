/**
 * loaders to process xml template to config.xml
 */

const { writeFileSync, readFileSync } = require('fs')
const { resolve } = require('path')
const to = resolve(__dirname, '../config.xml')
const env = resolve(__dirname, '../.env')
const from = resolve(__dirname, '../src/app/config.xml')

console.log('building config.xml')
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
const xml = readFileSync(
  from
).toString()
const res = xml.replace(/\{[\w\d]+\}/g, (s) => {
  const k = s.replace(/\{|\}/g, '')
  const v = conf[k]
  if (v) {
    return v
  } else {
    return s
  }
})
writeFileSync(to, res)

console.log('done')