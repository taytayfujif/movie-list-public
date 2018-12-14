'use strict';

const Pool = require('pg-pool');
const config = require('../config.json');
const { table, host, database, user, password, port} =  config;
const pool =  new  Pool({
  host,
  database,
  user,
  password,
  port,
  idleTimeoutMillis: 1000
});
module.exports.put = (event, context, callback) => {
    console.log('event.body', event.body);
  let {title, year, genre, id} = event.body

  const putMovie = "UPDATE " +table+ " SET title = $1, year = $2, genre = $3 WHERE id = $4"
  pool.connect()
      .then((client) => {
          client.release()
          return client.query(putMovie, [ title, year, genre, id])
      })
      .then((res) => {
          const response = {
              statusCode: 200,
              headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Credentials": true
              },
              body: JSON.stringify(res),
              message: "succcessfully updated movie"
          }
          callback(null, response);
          console.log('Your connection will now be terminated')
      })
      .catch(e => {
          console.log('error', e)
          const response = {
              "statusCode": 500,
              "body": JSON.stringify(e)
          }
          callback(null, response);
      });
};