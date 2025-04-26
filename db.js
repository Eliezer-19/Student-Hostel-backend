const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // important for Render/Postgres cloud setups
  },
});

module.exports = pool;
