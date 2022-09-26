import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET - /skills
router.get('/', skillsCtrl.index)
//  GET - /skills/new
router.get('/new', skillsCtrl.new)
// GET - /skills/:id
router.get('/:id', skillsCtrl.show)
// GET - /skills
router.post('/', skillsCtrl.create)

router.delete('/:id', skillsCtrl.delete)




export {
  router
}
