const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    console.info(`${req.method} request received!`);
})

app.post('/', (req, res) => {
    console.info(`${req.method} request received!`);
})