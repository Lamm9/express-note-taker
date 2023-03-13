const express = require('express');
const notes = require('./db/db.json');
const notePage = require('./Develop/public/notes.html');
const fs = require('fs');
const { readAndAppend } = require('./helpers/utils');
const noteFile = '/db/db.json';

const app = express();

app.use(express.static(__dirname, '/Develop/public'));

//GET route for notes page
app.get('/notes', (req, res) => {
    res.render('notes.html')
});

app.post('/notes', () => {
    console.info(`${req.method} request received to save note.`)

    readAndAppend(JSON.parse(data), noteFile);
});