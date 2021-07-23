export async function index(req, res, next) {
  let { code } = req.body
  try {
    await fs.writeFileSync(
      '../-Learning/vue-project-template/admin/src/components/common/Demo/index.vue',
      code
    )
  } catch (error) {
    console.log(error)
  }
  res.send({
    code: 0,
    msg: '创建成功',
  })
}
