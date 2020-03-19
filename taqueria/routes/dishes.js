const express = require('express');
let db = require('../models/database.js');
const router = express.Router();


router.get('/dishes',(req, res) => {
    db.query( 'SELECT * FROM restaurants')
    .then((results) => {
        res.render('dishes',{
            dishes:results
        })
        
    })
    // res.render('dishes')
});

module.exports= router;