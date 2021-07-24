#!/usr/bin/env zx
try {
  await cd('vue-template')
  // await $`npm i`
  await $`npm run dev`
  await $`npm run build:page`
} catch (error) {
  console.log(error)
}
