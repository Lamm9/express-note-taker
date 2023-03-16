const express = require('express');
const notePage = require('./Develop/public/notes.html');
const fs = require('fs');
const noteFile = '/db/db.json';
const {readData} = require('/helpers/utils.js');

const app = express();

app.use(express.static(__dirname, '/Develop/public'));

//GET route for notes page
app.get('/notes', (req, res) => {
    res.render('/notes.html');
    console.info(`${req.method} request received to get note page.`);
});

//POST route for notes page
app.post('/notes', () => {
    console.info(`${req.method} request received to save note.`);
    readData(JSON.parse(data), noteFile);
});

//DELETE route for notes page
app.delete('/notes', () => {
    console.info(`${req.method} request received to delete note.`);
    
});