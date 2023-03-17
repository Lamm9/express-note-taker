const fs = require('fs');
const path = require('path');
const readData = async () => {
    const data = await fs.readFile(path.join(__dirname,'/db/db.json'), 'utf-8')
    return JSON.parse(data)
}

const express = require('express');
const notePage = require('./Develop/public/notes.html');
const noteFile = '/db/db.json';
const {readData} = require('/helpers/utils.js');

const app = express();

app.use(express.static(__dirname, '/Develop/public'));

//GET route for notes page
app.get('/notes', (req, res) => {
    const myNote = readData()
    res.json(myNote);
})

//POST route for notes page
app.post('/notes', () => {
    console.info(`${req.method} request received to save note.`);
    readData(JSON.parse(req.body), noteFile);
});

//DELETE route for notes page
app.delete('/notes', () => {
    console.info(`${req.method} request received to delete note.`);
    
});