const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const user = {
    userName: 'admin',
    password: '1234'
  };
  if (user.userName !== req.body.userName) {
    return res.status(401).send('Invalid username or password');
  }
  try {
    if (user.password === req.body.password) {
      res.send({ userName: 'admin' });
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
