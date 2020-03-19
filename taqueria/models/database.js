///setting up the database

const promise = require('bluebird');

let initOptions = {
    promiseLib: promise
}

let config = {
    host: 'localhost',
    port: 5432,
    database: 'restaurants2020',
    user: 'postgres',
    password: '1234'
}

let pgp = require('pg-promise')(initOptions);
let db = pgp(config);

module.exports = db;