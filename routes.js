const express = require('express');

const rootRouter = express.Router();
const projectsController = require('./controller/projectsConroller');
const authController = require('./controller/authController');
const authentificateToken = require('./middleware/authorizaton');
const validator = require('./middleware/validation');

rootRouter.get(
  '/projects',
  authentificateToken,
  projectsController.getProjects
);
rootRouter.post('/login', authController.login);
rootRouter.post('/registration', validator, authController.registration);
rootRouter.post('/refresh-token', authController.refreshToken);
rootRouter.delete('/refresh-token', authController.deleteRefreshToken);

module.exports = rootRouter;
