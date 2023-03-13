const express = require('express');
const ejsmate = require('ejs-mate');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000

app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));


app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/projects', (req, res) => {
    res.render('projects.ejs');
});

app.get('/aboutme', (req, res) => {
    res.render('aboutme.ejs');
});

app.get('/contactme', (req, res) => {
    res.render('contactform.ejs')
});

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});