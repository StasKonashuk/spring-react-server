const express = require('express');

const rootRouter = express.Router();
const projects = require('./projects');
const auth = require('./auth');

rootRouter.use('/projects', projects);
rootRouter.use('/login', auth);

module.exports = rootRouter;
