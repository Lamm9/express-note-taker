const fs = require("node:fs/promises")
const path = require('path');
const readData = async () => {
    const data = await fs.readFile(path.join(__dirname,'/db/db.json'), 'utf-8')
    return JSON.parse(data)
}

const express = require('express');
const { read } = require("node:fs");
const PORT = process.env.PORT || 3001;

const app = express();

const noteDB = require(__dirname + '/db/db.json');

//middleware for parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//GET route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//GET route for homepage
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
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
        res.json({"message": "You need to provide some tuff"})
        return
    }  

    // fs.appendFile(__dirname + '/db/db.json', JSON.stringify(myNote, null, 4))

    res.json({"message": "note saved!"});
});

//DELETE route for api
app.delete('/api/notes', async (req, res) => {
    console.log('Should delete note')
    const myNote = await readData()
    console.log(myNote);
})

//server listener
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
});
