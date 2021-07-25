
import fs from 'fs'

export async function index(req, res, next) {
  let { code,name = 'index' } = req.body
  try {
    await fs.writeFileSync(
      `vue-project/src/page/Demo.vue`,
      code
    )
  res.send({
    code: 0,
    msg: '创建成功',
  })
  } catch (error) {
    console.log(error)
  }
}
