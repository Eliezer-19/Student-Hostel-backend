const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgresql://student_housing_db_otyn_user:5Eqwfb5rq1bZtk7kG6Ztb1Riygg2G49C@dpg-d06dc8ali9vc73e8js30-a.frankfurt-postgres.render.com/student_housing_db_otyn';
const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });

module.exports = pool;
