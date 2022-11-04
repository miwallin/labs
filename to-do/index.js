const express = require("express");
const path = require('path');
const todos = require('./data/todo-list.json');

const app = express();
const PORT = process.env.PORT || 9999;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/read-todos', ( req, res ) => {
    res.send(todos);
});

app.use(express.json());
app.post('api/write-todos', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});