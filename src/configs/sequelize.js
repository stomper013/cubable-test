const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');
const env = require('./env');

const { username, password, database, host, dialect } = env.db

const SequelizeServer = new Sequelize(database, username, password, { host, dialect });
SequelizeServer.beforeConnect(async (config) => {
  const connection = await mysql.createConnection({ host, user: username, password })
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`).then(
    _ => console.log('Init database !!')
  );
  config.database = database;
});

module.exports = SequelizeServer