const express = require('express');
let db =require('../models/database.js');
let bodyParser = require('body-parser');

const router = express.Router();


router.get('/newdish',(req, res) => {
    db.query('SELECT * FROM categories')
    .then((results) => {
        res.render('newdish',{
            categories:results
        })
        
    })
});
router.use(bodyParser.urlencoded({ extended:false }));

router.post('/newdish', (req, res) => {
    let name = req.body.title;
    let category = req.body.category;
    let food_description = req.body.description;
    let price = parseInt(req.body.price);
    let image_URL = req.body.imageURL;
    let course = "";

    db.none("INSERT INTO restaurants (name, category, food_description, price, course, img_URL) VALUES ($1, $2, $3, $4, $5, $6)",
        [name, category, food_description, price, course, image_URL])
        .then(() => {
            res.redirect('./dishes')
        })
        .catch((error) => {
            res.send(error);
        })
})

module.exports= router;