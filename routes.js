const express = require('express');

const rootRouter = express.Router();
const projectsController = require('./controller/projectsConroller');
const authController = require('./controller/authController');
const authentificateToken = require('./middleware/authorizaton');

rootRouter.get(
  '/projects',
  authentificateToken,
  projectsController.getProjects
);
rootRouter.post('/login', authController.login);
rootRouter.post('/registration', authController.registration);
rootRouter.get('/refresh-token', authController.refreshToken);
rootRouter.delete('/refresh-token', authController.deleteRefreshToken);

module.exports = rootRouter;
