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

app.set('trust proxy', 1);
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { sameSite: 'none' },
  })
);

app.use(cookieParser());

app.use('/', rootRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
