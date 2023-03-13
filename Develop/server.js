const express = require('express');
const router = express.Router();
const path = require('path');
const api = require('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware for parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api', api);

app.use(express.static(path.join(__dirname, '/Develop/public')));

//GET route for homepage
app.get('/', (req,res) => {
    res.render('/index.html');
    console.log(`${req.method} request received!`);
});

//server listener
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
    (err) ? console.log(err) : console.log('No errors to report.')
});