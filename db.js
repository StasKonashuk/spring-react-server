/* const Pool = require('pg').Pool;

const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.DB_NAME}`;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

module.exports = pool;
 */
const { Sequelize } = require('sequelize');

const isProduction = process.env.NODE_ENV === 'production';

const db = new Sequelize(
  isProduction
    ? process.env.DATABASE_URL
    : `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

module.exports = db;
