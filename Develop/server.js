const express = require('express');
const path = require('path');
const api = require('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware for parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//GET route for api
app.get('/api', (req, res) => {
    res.sendFile(api);
});

app.use(express.static(path.join(__dirname, '/public')));

//GET route for homepage
app.get('/', (req,res) => {
    res.render('/index.html');
    console.log(`${req.method} request received!`);
});

//server listener
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
});