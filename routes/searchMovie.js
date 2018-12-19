'use strict';

const Pool = require('pg-pool');
const config = require('../config.json');
const { table, host, database, user, password, port } = config;
const pool = new Pool({
  host,
  database,
  user,
  password,
  port,
  idleTimeoutMillis: 1000
});

module.exports.get = (event, context, callback) => {

  let {title} = event.bodynp
  const searchMovies = `SELECT * FROM ${table} WHERE title = $1;`;

  pool.connect()
    .then(client => {
      client.release();
      return client.query(searchMovies);
    })
    .then(data => {
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
          message: data
        }),
      };

      callback(null, response)
    })
    .catch(error=>{
      console.log('error', error);
    })
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};