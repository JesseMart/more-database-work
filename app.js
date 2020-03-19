//*********** promise library
const promise = require('bluebird');

//*********** pg-promise initialization options:
let initOptions = {
    promiseLib: promise        //using the custom promise library, instead of the default ES6 Promise:
}

//*********** Database connection parameters 
let config = {
    host: 'localhost',
    port: 5432,
    database: 'testDBMar11',
    user: 'postgres',
    password: '1234'
}

//**********  load and init pg-promise
let pgp = require('pg-promise')(initOptions);
let db = pgp(config);

// db.query("SELECT * FROM restauranttable WHERE name = 'Abu Omar'")
// .then((results) => {
//     console.log(results);
// })


//db.result returns the values that were executed
//db.none returns no information what was passed into the database


// db.result("INSERT INTO pgpromise VALUES (DEFAULT, 'Sean', 'Chicago');")
// .then((result) => {
//     console.log(result)
// })

//db.query selects alot of information from a table
// db.query("Select * FROM pgpromise")
// .then((result) => {
//     ///************* you can also use FOR EACH FUNCTION since the table is TECHNICALLY an array */
//     result.forEach((person) => {
//         console.log(`Good Morning ${person.name}`)
//     })
//     // console.log(result)
// });

// db.one("INSERT INTO pgpromise VALUES (DEFAULT, 'Jesse', 'Texas') RETURNING id;")
// .then((result) => {
    
//     console.log(result)

//     db.query(`SELECT * FROM pgpromise WHERE id = ${result.id}`)  ///returns the last record inserted 
//     .then((results) => {
//         console.log(`return from query`)
//     })
//     console.log('Record was inserted')
// })
