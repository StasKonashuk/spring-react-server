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
    exposedHeaders: ['set-cookie'],
  })
);
app.use(cookieParser());
app.enable('trust proxy');
app.use(
  session({
    secret: 'somesecret',
    key: 'sid',
    proxy: true,
    cookie: {
      secure: true,
      maxAge: 5184000000,
    },
  })
);

app.use('/', rootRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
