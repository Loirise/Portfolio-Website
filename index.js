const express = require('express');
const ejsmate = require('ejs-mate');
const path = require('path');

const app = express();

app.engine('ejs', ejsmate);
app.set('view enginge', 'ejs');

app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));


app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.listen(3000, () => {
    console.log('Serving on port 3000');
});