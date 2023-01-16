import { useState } from 'react'
import AddTodoForm from './components/AddTodoForm'
import Modal from './components/Modal'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { "id": 1, "title": "do something", "complete": false },
    { "id": 2, "title": "do something else", "complete": true },
    { "id":1667573832629, "title":"New Task 5", "complete":false }
  ]);
  const [showModal, setShowModal] = useState(false);

  const addTodo = title => {
    setTodos(oldTodos => {
      return [...oldTodos, { id: new Date(), title: title, complete: false }];
    })
  }
  
  const changeTodo = (todo, newTitle) => {
    todo.title = newTitle;
    setTodos(state => [...state]);
  }

  const removeTodo = id => {
    setTodos(oldTodos => {
      return oldTodos.filter(todo => todo.id !== id);
    })
  }

  const removeTodos = () => {
    setTodos([]);
    setShowModal(false);
  }

  const toggleComplete = todo => {
    todo.complete = !todo.complete;
    setTodos(state => [...state]);
  }

  return (
    <div className="App">
      <div className="title-container">
        <h1>Todolist</h1>
        { todos.length > 0 && <button onClick={ setShowModal }>Remove All</button>}
      </div>
      <TodoList 
        todos={todos} 
        changeTodo={changeTodo} 
        removeTodo={removeTodo} 
        toggleComplete={toggleComplete} 
      />
      <AddTodoForm addTodo={addTodo} />
      { showModal && <Modal 
        message={"Are you sure you want to remove all todos?"} 
        functionOnYes={removeTodos} 
        setShowModal={setShowModal} 
      />}
    </div>
  )
}

export default App