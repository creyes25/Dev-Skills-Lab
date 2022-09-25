import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills', {
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

// post the data into data base then redirect to /skills view
function createSkill(req, res) {
  console.log(req.body)
  Skill.create(req.body)
  .then(skill => {
    res.redirect('skills')
  })
}

export {
  index,
  newSkill as new,
  createSkill as create
}