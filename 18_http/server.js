const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

let books = [
    { name: 'Angular' },
    { name: 'React' },
    { name: 'Vue' }
];

app.get('/books', (req, res) => {
    res.json(books);
})

app.post('/books', (req, res) => {
    books.push({
        name: req.body.name
    });
    res.sendStatus(200);
})

app.listen(3001, () => console.log('App started.'));