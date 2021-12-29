const express = require('express');

const router = express.Router();
const projectsInfo = require('./projectsData');

router.get('/projects', (req, res) => {
  try {
    res.json(projectsInfo);
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
