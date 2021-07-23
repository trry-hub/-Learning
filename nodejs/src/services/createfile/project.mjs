import shell from 'shelljs'
export async function project(req, res, next) {
  // await shell.exec('ls')
  // await shell.cd('src/shell/createVueProject')
  await shell.exec('zx src/shell/createVueProject.mjs')

  res.send({
    code: 0,
    msg: '创建成功',
  })
}
