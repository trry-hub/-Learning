import express from 'express'
var router = express.Router()
import services from '../services/index.mjs'

router.post('/', services['createfile/index'].index)

router.get('/project', services['createfile/project'].project)

export default router
