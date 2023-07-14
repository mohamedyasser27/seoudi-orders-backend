require("dotenv").config();
const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

const query = async (sqlQuery) => {
  try {
    await connection.promise().connect();
    const [result] = await connection.promise().query(sqlQuery);
    return result;
  } catch (error) {
    return { errorMsg: error.message };
  }
};

module.exports = { query };
