require('dotenv').config();
const express = require('express');
const cors = require('cors');
const projectsInfo = require('./projects');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/projects', (req, res) => {
  try {
    res.json(projectsInfo);
  } catch {
    res.status(500).send();
  }
});

app.post('/login', async (req, res) => {
  const user = {
    userNname: 'admin',
    password: '1234'
  };
  if (user.userNname !== req.body.userName) {
    return res.status(401).send('Invalid username or password');
  }
  try {
    if (user.password === req.body.password) {
      res.send('Success');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
