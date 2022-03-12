//modules
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let notes = fs.readFileSync('./db/db.json');
notes = JSON.parse(notes);

//home page
app.get('/', (req, res) => {
    res.sendFile(__dirname, '/index.html');
});

//notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//API
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

//add notes
app.post('api/notes', (req, res) => {
    const addNote = req.body;

    res.end();
});

app.listen(PORT)