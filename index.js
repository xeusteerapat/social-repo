const app = require('./src/app');
const pool = require('./src/pool');
require('dotenv').config();

pool
  .connect({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
  })
  .then(() => {
    app().listen(3005, () => {
      console.log('server running 3005 🚀');
    });
  })
  .catch(err => console.error(err));
