#!/usr/bin/env zx
try {
  await cd('vue-project')
  await $`npm run lint`
  // await $`npm i`
  await $`npm run build:page`
} catch (error) {
  console.log(error)
}
