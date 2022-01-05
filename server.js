require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rootRouter = require('./routes');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(cookieParser());
app.use(
  session({
    name: 'random_session',
    secret: 'yryGGeugidx34otGDuSF5sD9R8g0Gü3r8',
    resave: false,
    saveUninitialized: true,
    cookie: {
      path: '/',
      secure: true,
      httpOnly: true,
    },
  })
);

app.use('/', rootRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
