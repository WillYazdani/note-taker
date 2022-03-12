const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    console.log('Here');
    res.sendFile(path.join(__dirname, '/public/notes.json'));
})

app.listen(PORT)