const express = require("express");
const fs = require('fs');
const todos = require('./data/todo-list.json');

const app = express();

const PORT = process.env.PORT || 9999;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/api/read', ( req, res ) => {
    fs.readFile('./data/todo-list.json', (err, data) => {
        const todoList = JSON.parse(data);
        res.send(todoList);
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});