import express from 'express'
import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

var router = express.Router()
const files = fs.readdirSync(__dirname)

files.forEach(async function (file, index) {
  if (file !== 'loader.mjs') {
    let route = await import('./' + file)
    if (file === 'index.mjs') {
      router.use('/', route.default)
    } else {
      router.use('/api/' + file.replace('.mjs', ''), route.default)
    }
  }
})

export default router
