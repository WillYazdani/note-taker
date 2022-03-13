//modules
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let notes = fs.readFileSync('./db/db.json');
notes = JSON.parse(notes);

//notes
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
    notes.push(addNote);
    res.end();
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});