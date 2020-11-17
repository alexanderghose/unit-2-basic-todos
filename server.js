const express = require('express');
const path = require('path');
const todoDb = require('./data/todos-db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/todos', function(req, res) {
  res.render('todos/index', {todos: todoDb.todos})
})

app.listen(3001, function () {
  console.log('Listening on port 3001');
});
