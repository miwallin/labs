import TodoItem from './TodoItem'

const TodoList = ({ todos, changeTodo, removeTodo, toggleComplete }) => {

  if(!todos.length) return (
    <div className='no-show'>
      <h2>No todos to show</h2>
    </div>
  )

  return (
    <div>
        {
          todos && todos.map(todo => <TodoItem
            key={todo.id}
            todo={todo}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
            />)
        }
    </div>
  )
}

export default TodoList