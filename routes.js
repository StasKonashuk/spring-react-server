const express = require('express');

const rootRouter = express.Router();
const projectsController = require('./controller/projectsConroller');
const authController = require('./controller/authController');
const authentificateToken = require('./middleware/authorizaton');

rootRouter.get(
  '/api/projects',
  authentificateToken,
  projectsController.getProjects
);
rootRouter.post('/api/login', authController.login);
rootRouter.post('/api/registration', authController.registration);
rootRouter.get('/api/refresh-token', authController.refreshToken);
rootRouter.delete('/api/refresh-token', authController.deleteRefreshToken);

module.exports = rootRouter;
