const output = document.querySelector('#output');

const todos = [];

const fetchTodos = async () => {
  const res = await fetch('./api/read-todos');
  const data = await res.json();
  data.forEach(todo => {
    todos.push(todo);
    console.log(todo);
  });
  console.log(todos);
  buildTodoList();
}

const buildTodoList = () => {
  output.innerHTML = '';
  todos.forEach(todo => {
    output.appendChild(buildTodoDiv(todo));
  })
}

const buildTodoDiv = todo => {
  let todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  let title = document.createElement('h4');
  title.classList.add('todo-title');
  title.innerText = todo.task_title;
  let content = document.createElement('p');
  content.classList.add('todo-content');
  content.innerText = todo.task_content;
  let button = document.createElement('button');
  button.textContent = 'Done';
  todoDiv.appendChild(title);
  todoDiv.appendChild(content);
  todoDiv.appendChild(button);

  return todoDiv;
}

fetchTodos();