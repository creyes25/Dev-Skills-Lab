import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills
    })
  }).catch(error => {
    console.lot(error)
    res.redirect('/')
  })
}

// render a view page where the new skill will be added
function newSkill(req, res) {
  res.render('skills/new')
}

export {
  index,
  newSkill as new
}