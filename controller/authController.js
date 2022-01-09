const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const schema = require('../validators/schema');
const validate = require('../validators/validate');
const Users = require('../models/Users');
const jwtTokens = require('../utils/jwt-helpers');

class AuthController {
  async registration(req, res) {
    try {
      const { userName, password, repeatPassword, firstName, lastName, age } =
        req.body;

      const validateResult = validate(
        { userName, password, repeatPassword, firstName, lastName, age },
        schema
      );

      if (validateResult.error) {
        return res.status(400).json({ error: validateResult.detail });
      }

      const hashPassword = await bcrypt.hash(password, 8);

      const candidate = await Users.findOne({ where: { user_name: userName } });
      if (candidate) {
        return res.status(401).json({ message: 'User already registered' });
      }

      await Users.create({
        user_name: userName,
        password: hashPassword,
        first_name: firstName,
        last_name: lastName,
        age,
      });

      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { userName, password } = req.body;

      const user = await Users.findOne({ where: { user_name: userName } });
      if (!user) {
        return res.status(401).json({ message: 'Invalid user name' });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      const tokens = jwtTokens(user);
      res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
      res.status(200).json(tokens);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  refreshToken(req, res) {
    try {
      const refreshToken = req.body.token;

      if (refreshToken === null) {
        return res.status(401).json({ error: 'Null refresh token' });
      }

      jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET,
        (error, user) => {
          if (error) {
            return res.status(403).json({ error: error.message });
          }
          const tokens = jwtTokens(user);
          res.cookie('refresh_token', tokens.refreshToken, {
            httpOnly: true,
          });
          res.json(tokens);
        }
      );
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  deleteRefreshToken(req, res) {
    try {
      res.clearCookie('refresh_token');
      return res.status(200).json({ message: 'refresh token deleted.' });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new AuthController();
