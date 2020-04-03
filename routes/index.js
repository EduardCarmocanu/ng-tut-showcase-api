var express = require('express');
var router = express.Router();
var projectsRouter = require('./projects.router')

router.use('/projects', projectsRouter)

module.exports = router;
