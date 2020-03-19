const express = require('express');
const app = express();
const promise = require('bluebird');




app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(require('./routes/dishes'));
app.use(require('./routes/newdish'));



app.listen(3000, () => {
    console.log("Listening on port 3000");
})