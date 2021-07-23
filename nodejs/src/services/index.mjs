import fs from 'fs'
import { dirname, format } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const files = fs.readdirSync(__dirname)
const deepPath = async (files, func, obj) => {
  for (let element of files) {
    if (element === 'index.mjs') return
    if (func(element)) {
      const arrPath = fs
        .readdirSync(__dirname + '/' + element)
        .map((item) => `${element}/${item}`)

      deepPath(arrPath, func, obj)
    } else {
      let module = import('./' + element)
      const pathName = element.replace('.mjs', '')
      obj[pathName] = module
    }
  }
}

// 处理promise
const formatPath = async (obj) => {
  for (let key in obj) {
    obj[key] = await obj[key]
  }
}

let obj = {}
deepPath(
  files,
  (file) => fs.statSync(__dirname + '/' + file).isDirectory(),
  obj
)

await formatPath(obj)

export default obj
