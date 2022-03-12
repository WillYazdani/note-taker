const express = require('express');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

//index page
app.get('/', (req, res) => {
    res.sendFile(__dirname, '/index.html');
});

//notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.json'));
});

//API
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, NoteData) => {
        if (err) {
            console.log(err);
        }
        const notes = JSON.parse(NoteData);
        res.json(notes)
    })
});

app.listen(PORT)