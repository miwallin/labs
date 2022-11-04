const output = document.querySelector('#output');
const input = document.querySelector('#input');
const title_input = document.querySelector('#task_title');
const content_input = document.querySelector('#content');

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

  let buttonDiv = document.createElement('div');
  buttonDiv.classList.add('button-div');
  let fButton = document.createElement('button');
  fButton.textContent = 'Finished';
  let dButton = document.createElement('button');
  dButton.textContent = 'Delete';
  buttonDiv.appendChild(fButton);
  buttonDiv.appendChild(dButton);

  todoDiv.appendChild(title);
  todoDiv.appendChild(content);
  todoDiv.appendChild(buttonDiv);

  return todoDiv;
}

const newTodo = (task_title, task_content) => {
  let id = Date.now();
  fetch('./api/write-todos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      task_id: id,
      task_title,
      task_content,
      completion_status: false
    })
  })
  .then(res => res.json())
  .then(data => {
    todos.push(data);
    buildTodoDiv(data);
    fetchTodos();
  })
}

fetchTodos();

input.addEventListener('submit', e => {
  e.preventDefault();

  newTodo(title_input.value, content_input.value);
});