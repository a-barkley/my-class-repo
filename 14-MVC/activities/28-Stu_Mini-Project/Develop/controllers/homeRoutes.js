const router = require('express').Router();
const { Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    const projectData = await Project.findAll();
    res.json(projectData)
  }
  catch (err) {
    console.log(err)
  }
})

module.exports = router