const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const schema = require('../validators/schema');
const validate = require('../middleware/validate');
const pool = require('../db');
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
      const candidate = await pool.query(
        `SELECT * FROM users
      WHERE userName = $1`,
        [userName]
      );
      if (candidate.rows.length > 0) {
        return res.status(401).json({ message: 'User already registered' });
      }
      await pool.query(
        `INSERT INTO users (userName, password, firstName, lastName, age)
          VALUES ($1, $2, $3, $4, $5)`,
        [userName, hashPassword, firstName, lastName, age]
      );
      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { userName, password } = req.body;
      const user = await pool.query(
        `SELECT * FROM users
      WHERE userName = $1`,
        [userName]
      );
      if (user.rows.length === 0) {
        return res.status(401).json({ message: 'Invalid user name' });
      }
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].password
      );
      if (!validPassword) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      const tokens = jwtTokens(user.rows[0]);
      res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
      res.status(200).json(tokens);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }

  refreshToken(req, res) {
    try {
      const refreshToken = req.cookies.refresh_token;
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
