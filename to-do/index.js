const express = require("express");
const fs = require('fs');
const path = require('path');
const todos = require('./data/todo-list.json');

const app = express();
const PORT = process.env.PORT || 9999;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/read-todos', ( req, res ) => {
    res.send(getTodos());
});

app.use(express.json());
app.post('/api/write-todos', (req, res) => {
    const listTodos = getTodos();
    const newTodo = req.body;
    listTodos.push(newTodo);
    saveTodos(listTodos);
    console.log(newTodo);
    res.send(newTodo);
});

app.put('/api/update-todos', (req, res) =>{
  const tID = req.body.task_id;
  const toUpdate = req.body;
  const listTodos = getTodos();
  const filterList = listTodos.filter( todo => todo.task_id != tID);
  if (listTodos.length === filterList.length) {
    return res.status(409).send({error: true, msg: 'Todo does not exist'});
  }
  filterList.push(toUpdate);
  saveTodos(filterList);
  res.send({success: true, msg: 'Todo updated successfully'});
});

app.delete('/api/delete-todos/:task_id', (req, res) => {
  const todoId = req.params.task_id;
  console.log(todoId);
  const listTodos = getTodos();
  const filterList = listTodos.filter( todo => todo.task_id != todoId);
  if (listTodos.length === filterList.length) {
    return res.status(409).send({error: true, msg: 'Todo does not exist'});
  }
  saveTodos(filterList);
  res.send({success: true, msg: 'Todo removed successfully'});
});

const saveTodos = (data) => {
  const saveData = JSON.stringify(data);
  fs.writeFileSync('./data/todo-list.json', saveData);
}

const getTodos = () => {
  const getData = fs.readFileSync('./data/todo-list.json');
  return JSON.parse(getData);
}

app.listen(PORT, () => {
  console.log(`Todo list listening on port ${PORT}!`);
});