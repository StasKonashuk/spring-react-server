const jwt = require('jsonwebtoken');

function generateTokens({ userId, userName }) {
  const user = { userId, userName };
  const accessToken = jwt.sign(user, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '1m',
  });
  const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '5m',
  });
  return { accessToken, refreshToken };
}

module.exports = generateTokens;
