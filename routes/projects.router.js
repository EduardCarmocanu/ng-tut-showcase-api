var express = require('express');
const projectsController = require('../controllers/projects.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', projectsController.get);

module.exports = router;
