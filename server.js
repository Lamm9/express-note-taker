const fs = require("node:fs/promises")
const path = require('path');
const readData = async () => {
    const data = await fs.readFile(path.join(__dirname,'/db/db.json'), 'utf-8')
    return JSON.parse(data)
}

const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

const noteDB = require(__dirname + '/db/db.json');

//middleware for parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//GET routes for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//GET route for homepage
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    console.info(`${req.method} received for notes page.`)
});

//GET route for api
app.get('/api/notes', async (req, res) => {
    console.log("Should get my notes here")
    const myNote = await readData()
    console.log(myNote)
    res.json(myNote)
});

//POST route for api
app.post('/api/notes', async (req, res) => {
    console.log("Should post my notes here")
    const myNote = await readData()
    console.log(myNote)
    console.log(req.body)
    if(!req.body.title || !req.body.text){
        res.json({"message": "Please fill out both title and text fields."})
        return
    }  

    const dbFile = require('/db/db.json')
    JSON.stringify(dbFile);
    
    fs.appendFile(__dirname + '/db/db.json', JSON.stringify(req.body, null, 4));

    res.json({"message": "note saved!"});
});

//server listener
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
});
