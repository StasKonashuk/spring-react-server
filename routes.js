const express = require('express');

const rootRouter = express.Router();
const projects = require('./projects');
const auth = require('./auth');

rootRouter.get('/projects', projects);
rootRouter.post('/login', auth);

module.exports = rootRouter;
