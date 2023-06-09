require('dotenv').config();
const PgClient = require('../pgClient');
const { PGSQL_DUPLICATE_DATABASE_ERROR, PGSQL_INSUFFICIENT_PRIVILEGES_ERROR } = require('../../db/pgsql-errors');

const dbUrl = process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL;

const url = new URL(dbUrl);

const DB_TO_CREATE_NAME = url.pathname.slice(1);

url.pathname = '/postgres';

PgClient.getClient(url.href).then(async (client) => {
  try {
    await client.query_and_log(`CREATE DATABASE ${DB_TO_CREATE_NAME};`);
    console.log('Database created');
    await client.end();
    process.exit(0);
  } catch (error) {
    if (error.code === PGSQL_DUPLICATE_DATABASE_ERROR) {
      console.log(`Database ${DB_TO_CREATE_NAME} already created`);
      await client.end();
      process.exit(0);
    }
    if (error.code === PGSQL_INSUFFICIENT_PRIVILEGES_ERROR) {
      console.log(`Permission denied to create database ${DB_TO_CREATE_NAME}`);
      await client.end();
      process.exit(3);
    }    
    process.exit(1);
  }
});
