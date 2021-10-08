const mysql = require('mysql2/promise');
const config = require('./db.config');

const query = async (sql, params) => {
  const con = await mysql.createConnection(config);

  const [results,] = await con.execute(sql, params);

  return results;
}

module.exports = {
  query
}
